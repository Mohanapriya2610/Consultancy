const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({

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
        default:"Workers"
    }
});

const Workers = new mongoose.model("Workers", WorkerSchema);

module.exports = Workers;