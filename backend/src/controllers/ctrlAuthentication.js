const { OAuth2Client } = require("google-auth-library");
const jwt = require('jsonwebtoken');
const CLIENT_ID = '871739763343-2miis7h4hc28ce17v7t4spaneq5tkg49.apps.googleusercontent.com';
const JWT_KEY = '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';
const userModel = require('../models/Users');

googleAuth = (req, res) => {
    console.log(req.headers, req.body, req.response);
    const { token } = req.body;
    const client = new OAuth2Client(CLIENT_ID);
    client
        .verifyIdToken({ idToken: token, audience: CLIENT_ID })
        .then((resp) => {
            console.log(resp);
            const { name, email } = resp.payload;
            //console.log(name, email);
            return userModel.findOneAndUpdate(
                { email: email }, { name: name }, { new: true, upsert: true }
            );
        }).then(user => {
            console.log('User response from update in ctrlAuthentication: ', user);
            var appToken = jwt.sign({ user: user }, JWT_KEY, { expiresIn: '1h' });
            res.json(appToken);
        })
        .catch((err) => {
            console.log('Error in Authenticaton Controller: ', err);
            res.status(500).send(err);
        });
};

module.exports = { googleAuth };