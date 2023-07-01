const userModel = require('../models/User');
const token = require('../utils/jwt')
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({
            name,
            email,
            password,
        })
        token(user, 201, res)
    } catch (err) {
        console.log(err);
        res.status(401).json({
            message: err
        })
    }
}
exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            res.status(401).json({ message: "Please enter the all fields" })
            return;
        }
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            res.status(401).json({ message: "Invalid Email" })
            return;
        }
        if (!await user.isValidPassword(password)) {
            res.status(401).json({ mesage: "Invalid Password" });
            return;
        }
        token(user, 201, res)
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}

exports.logoutuser = (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    }).status(200).json({
        success: true,
        msg: "Logged out successfully"
    })
}

exports.UserProfile = async(req,res) =>{
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
         success:true,
         user
    })
}