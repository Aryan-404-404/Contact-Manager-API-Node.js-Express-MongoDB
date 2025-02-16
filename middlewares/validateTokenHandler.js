const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")

const validateToken = asyncHandler( async(req, res, next)=>{
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            if(err){
                res.status(400);
                throw new Error("User is not authorized")
            }
            req.user = decoded.user;
            next();
        })
        if(!token){
            res.status(401);
            throw new Error("User is not authorized")
        }
    }
})

module.exports = validateToken;
