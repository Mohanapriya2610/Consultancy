// const mongoose = require("mongoose");
// const NammakalSchema = new mongoose.Schema({
//     ProductDistrict: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         // required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },

//     description: {
//         type: String,
//         default: true,
//     },
//     price: {
//         type: Number,
//         default: 0,
//     },
//     stocks: {
//         type: Number,
//         default: 1
//     }
// });

// const Nammakal = mongoose.model("Nammakal", NammakalSchema);

// module.exports = Nammakal;

const mongoose = require("mongoose");
const NammakalSchema = new mongoose.Schema({
    ProductDistrict: {
        type: String,
        required: true
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        default: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    stocks: {
        type: Number,
        default: 1
    }
});

const Nammakal = mongoose.model("Nammakal", NammakalSchema);

module.exports = Nammakal;

