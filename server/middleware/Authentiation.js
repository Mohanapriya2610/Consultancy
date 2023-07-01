const jwt = require('jsonwebtoken')
const userModel = require('../models/User')
exports.AuthenticateRoutes = async(req,res,next)=>{
    let {token} = req.cookies;
    if(!token){
        return res.status(401).json({
            message:'user not logged in so, do not access routes'
        })
    }
    const decode =jwt.verify(token,process.env.jwt_key);
    req.user = await userModel.findById(decode.id);
    next()
}
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                message: `${req.user.role} is Not Allowed`
            });
        }
        next();
    }
}