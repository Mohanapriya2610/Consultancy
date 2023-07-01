const mongoose = require("mongoose");

const CoordinatorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    age: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    salary: {
        type: String,
        required: true,
        default: 0.0
    },  
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    role:{
        type:String,
        default:"Coordinator"
    },
    password:{
        type:String,
        required:true
    }
});

const Coordinator = mongoose.model("coordinator", CoordinatorSchema);

module.exports = Coordinator;