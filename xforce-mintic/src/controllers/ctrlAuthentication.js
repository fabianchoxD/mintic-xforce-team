const { OAuth2Client } = require("google-auth-library");
const jwt = require('jsonwebtoken');
const CLIENT_ID = process.env.CLIENT_ID;
const JWT_KEY = process.env.JWT_KEY;
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
            var appToken = jwt.sign({ user: user }, JWT_KEY);
            res.json(appToken);
        })
        .catch((err) => {
            console.log('Error in Authenticaton Controller: ', err);
            res.status(500).send(err);
        });
};

module.exports = { googleAuth };