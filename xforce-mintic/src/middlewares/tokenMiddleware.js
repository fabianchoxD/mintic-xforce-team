const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const JWT_KEY = process.env.JWT_KEY;

verifyToken = (req, res, next) => {
    const { token } = req.headers;
    console.log("middleware: ", token);
    jwt.verify(token, process.env.JWT_KEY, function(err, decoded){
        if(err){
            console.log('There was an error verifying token: ', err);
            res.status(401).send('Not Authorized');
            return;
        }
    Users.findById(decoded.user._id).then((data) => {
        var appToken = jwt.sign({ user: data }, JWT_KEY);
        req.token = appToken;
        req.userDecoded = data;
        next();
    }).catch(err => {
        res.send(err);
    })
    });
}

module.exports ={
    verifyToken
}