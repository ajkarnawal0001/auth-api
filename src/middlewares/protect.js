const jwt = require("jsonwebtoken")
const User = require("../model/user.model")

const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
            if(err) return reject(err)

            if (user) return resolve(user)
        })
    })
}
const protect = async(req,res,next) => {
    const bearerToken = req?.headers?.authorization;

    if(!bearerToken || !bearerToken.startsWith("Bearer"))
    return res.status(401).json({status:"failed",message:"something went wrong"})
    
    
    const token = bearerToken.split(" ")[1]

    let user;
    console.log(token)
    try {
        user = await verifyToken(token)
    } catch (e) {
        return res.status(400).json({status:"failed",message:"please send a valid bearer token"})
    }
    req.user = user;
    next()
}

module.exports = protect