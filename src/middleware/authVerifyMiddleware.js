const jwt = require('jsonwebtoken');

module.exports=(req, res, next)=>{

    
    let Token=req.headers['token-key']
    jwt.verify(Token, "SecretKey1234", function(err, decoded){
        if(err){
            res.status(401).json({status:"unauthorized"})
        }
        else{

            //Get User name from Decoded Token & Add With Req Header
            let userName=decoded['data']['UserName'];
            req.headers.userName=userName

            next();
        }
    } )

}