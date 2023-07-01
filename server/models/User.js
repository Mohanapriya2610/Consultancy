const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.jwt_key, {
        expiresIn: process.env.jwt_exp_time
    })
}
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


const user = mongoose.model("user", userSchema);

module.exports = user;