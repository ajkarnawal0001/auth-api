const jwt = require("jsonwebtoken")
const User = require("../model/user.model")

const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,"test12345",(err,user)=>{
            if(err) return reject(err)

            if (user) return resolve(user)
        })
    })
}
const protect = async(req,res,next) => {
    const bearerToken = req?.headers?.authorization;

    if(!bearerToken || !bearerToken.startWith("Bearer"))
    return res.status(401).json({status:"failed",message:"something went wrong"})
    
    
    const token = bearerToken.split(" ")[1].trim()

    let user;

    try {
        user = await verifyToken(token)
    } catch (e) {
        return res.status(500).json({status:"failed",message:"erorr in finfind user"})
    }
    req.user = user;
    next()
}

module.exports = protect