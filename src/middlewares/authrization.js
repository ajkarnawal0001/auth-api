const authorise = (permittedRoles) => async function (req,res,next) {
    const {user} = req.user
    const roles = user.roles
    const is_permitted = permittedRoles.filter(role => roles.includes(role));

    if(is_permitted.length >0){
        next()
    }else {
        return res.status(405).send({status:"failed",message:"denied"})
    }
}

module.exports = authorise