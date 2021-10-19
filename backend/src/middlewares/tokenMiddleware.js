const jwt = require('jsonwebtoken');
verifyToken = (req, res, next) => {
    const { token } = req.headers;
    console.log("middleware: ", token);
    jwt.verify(token, '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', function(err, decoded){
        if(err){
            console.log('There was an error verifying token: ', err);
            res.status(401).send('Not Authorized');
            return;
        }
    console.log("respuesta decodificada: ",decoded)
    });
    next();
}

module.exports ={
    verifyToken
}