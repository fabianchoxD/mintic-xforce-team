const jwt = require('jsonwebtoken');
verifyToken = (req, res, next) => {
    const { token } = req.headers;
    console.log("middleware: ", token);
    jwt.verify(token, process.env.JWT_KEY, function(err, decoded){
        if(err){
            console.log('There was an error verifying token: ', err);
            res.status(401).send('Not Authorized');
            return;
        }
    req.userDecoded = decoded;;
    next();
    });
}

module.exports ={
    verifyToken
}