// const mongoose = require("mongoose");
// const PollachiSchema = new mongoose.Schema({
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

// const Pollachi = mongoose.model("Pollachi", PollachiSchema);

// module.exports = Pollachi;


const mongoose = require("mongoose");
const PollachiSchema = new mongoose.Schema({
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

const Pollachi = mongoose.model("Pollachi", PollachiSchema);

module.exports = Pollachi;

