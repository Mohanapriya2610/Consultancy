const CoimbatoreModel = require('../models/CoimbatoreProduct');
const ErodeModel = require('../models/ErodeProduct');
const NammakalModel = require('../models/NammakalProduct')
const PollachiModel = require('../models/PollachiProduct');
const TrichyModel = require('../models/TrichyProduct');
const TiruppurModel = require('../models/TiruppurProduct');
//Coimbatore operations
const cloudinary = require('../utils/cloudinary')
//Coimbatore operations
exports.CoimbatoreProductInsert = async (req, res) => {
    try {
       
        const result = await cloudinary.uploader.upload(req.body.image, {
            folder: "products",
        })


        const CoimbatoreProduct = await CoimbatoreModel.create({
            name:req.body.name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            price: req.body.price,
            description : req.body.description,
            stocks:req.body.stocks,
            ProductDistrict:req.body.ProductDistrict
        });
       
      
        res.status(200).json({
            message: "Coimbatore Product Inserted",
            CoimbatoreProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}

exports.CoimbatoreProductGet = async (req, res) => {
    try {
        const CoimbatoreProducts = await CoimbatoreModel.find();
        res.status(200).json({
            message: "data getted",
            CoimbatoreProducts
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.CoimbatoreProductGetSingle = async (req, res) => {
    try {
        const CoimbatoreProduct = await CoimbatoreModel.findById(req.params.id);
        if (!CoimbatoreProduct) {
            return res.status(401).json({
                message: "CoimbatoreProduct by this id not found"
            })
        }
        res.status(201).json({
            CoimbatoreProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.CoimbatoreProductUpdate = async (req, res) => {
    try {
        // let Coimbatoreupdate = await CoimbatoreModel.findById(req.params.id);
        // if (!Coimbatoreupdate) {
        //     return res.status(401).json({
        //         message: "CoimbatoreProduct by this id not found"
        //     })
        // }
       let Coimbatoreupdate = await CoimbatoreModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            Coimbatoreupdate
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.CoimbatoreProductDelete = async (req, res) => {
    try {
        let CoimbatoreProD = await CoimbatoreModel.findById(req.params.id);
        if (!CoimbatoreProD) {
            return res.status(401).json({
                message: "Coimbatore product by this id not found"
            })
        }
        await CoimbatoreProD.deleteOne();
        res.status(200).json({
            message: "Coimbatore Product deleted"
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
//ErodeProdut Operations

//Erode operations
exports.ErodeProductInsert = async (req, res) => {
    try {
       
        const result = await cloudinary.uploader.upload(req.body.image, {
            folder: "products",
        })

        const ErodeProduct = await ErodeModel.create({
            name:req.body.name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            price: req.body.price,
            description : req.body.description,
            stocks:req.body.stocks,
            ProductDistrict:req.body.ProductDistrict
        });
       
      
        res.status(200).json({
            message: "Erode Product Inserted",
            ErodeProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}



exports.ErodeProductGet = async (req, res) => {
    try {
        const ErodeProducts = await ErodeModel.find();
        res.status(200).json({
            message: "data getted",
            ErodeProducts
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.ErodeProductGetSingle = async (req, res) => {
    try {
        const ErodeProduct = await ErodeModel.findById(req.params.id);
        if (!ErodeProduct) {
            return res.status(401).json({
                message: "ErodeProduct by this id not found"
            })
        }
        res.status(201).json({
            ErodeProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.ErodeProductUpdate = async (req, res) => {
    try {
        // let  ErodeProduct= await ErodeModel.findById(req.params.id);
        // if (!Eroupdate) {
        //     return res.status(401).json({
        //         message: "ErodeProduct by this id not found"
        //     })
        // }
       let  ErodeProduct = await ErodeModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            ErodeProduct
        })

    } catch (err) {
        res.status(401).json({
            message: "errode",
            
        })
    }
}
exports.ErodeProductDelete = async (req, res) => {
    try {
        let EroProD = await ErodeModel.findById(req.params.id);
        if (!EroProD) {
            return res.status(401).json({
                message: "Erode product by this id not found"
            })
        }
        await EroProD.deleteOne();
        res.status(200).json({
            message: "Erode Product deleted"
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}

//Nammakal Operations
exports.NammakalProductInsert = async (req, res) => {
    try {
       
        const result = await cloudinary.uploader.upload(req.body.image, {
            folder: "products",
        })

        const NammakalProduct = await NammakalModel.create({
            name:req.body.name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            price: req.body.price,
            description : req.body.description,
            stocks:req.body.stocks,
            ProductDistrict:req.body.ProductDistrict
        });
       
      
        res.status(200).json({
            message: "Nammakal Product Inserted",
            NammakalProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}



exports.NammakalProductGet = async (req, res) => {
    try {
        const NammakalProducts = await NammakalModel.find();
        res.status(200).json({
            message: "data getted",
            NammakalProducts
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.NammakalProductGetSingle = async (req, res) => {
    try {
        const NammakalProduct = await NammakalModel.findById(req.params.id);
        if (!NammakalProduct) {
            return res.status(401).json({
                message: "NammakalProduct by this id not found"
            })
        }
        res.status(201).json({
            NammakalProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.NammakalProductUpdate = async (req, res) => {    try {
        // let Nammakalupdate = await NammakalModel.findById(req.params.id);
        // if (!Nammakalupdate) {
        //     return res.status(401).json({
        //         message: "NammakalProduct by this id not found"
        //     })
        // }
       let Nammakalupdate = await NammakalModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            Nammakalupdate
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.NammakalProductDelete = async (req, res) => {
    try {
        let NammakalProD = await NammakalModel.findById(req.params.id);
        if (!NammakalProD) {
            return res.status(401).json({
                message: "Nammakal product by this id not found"
            })
        }
        await NammakalProD.deleteOne();
        res.status(200).json({
            message: "Nammakal Product deleted"
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}

//Pollachi operations
exports.PollachiProductInsert = async (req, res) => {
    try {
       
        const result = await cloudinary.uploader.upload(req.body.image, {
            folder: "products",
        })

        const PollachiProduct = await PollachiModel.create({
            name:req.body.name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            price: req.body.price,
            description : req.body.description,
            stocks:req.body.stocks,
            ProductDistrict:req.body.ProductDistrict
        });
       
      
        res.status(200).json({
            message: "Pollachi Product Inserted",
            PollachiProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}


exports.PollachiProductGet = async (req, res) => {
    try {
        const PollachiProducts = await PollachiModel.find();
        res.status(200).json({
            message: "data getted",
            PollachiProducts
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.PollachiProductGetSingle = async (req, res) => {
    try {
        const PollachiProduct = await PollachiModel.findById(req.params.id);
        if (!PollachiProduct) {
            return res.status(401).json({
                message: "PollachiProduct by this id not found"
            })
        }
        res.status(201).json({
            PollachiProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.PollachiProductUpdate = async (req, res) => {    try {
        // let Pollachiupdate = await PollachiModel.findById(req.params.id);
        // if (!Pollachiupdate) {
        //     return res.status(401).json({
        //         message: "PollachiProduct by this id not found"
        //     })
        // }
       let Pollachiupdate = await PollachiModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            Pollachiupdate
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.PollachiProductDelete = async (req, res) => {
    try {
        let PollachiProD = await PollachiModel.findById(req.params.id);
        if (!PollachiProD) {
            return res.status(401).json({
                message: "Pollachi product by this id not found"
            })
        }
        await PollachiProD.deleteOne();
        res.status(200).json({
            message: "Pollachi Product deleted"
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
//Trichy operations
//const cloudinary = require('../utils/cloudinary')
//Trichy operations
exports.TrichyProductInsert = async (req, res) => {
    try {
       
        const result = await cloudinary.uploader.upload(req.body.image, {
            folder: "products",
        })

        const TrichyProduct = await TrichyModel.create({
            name:req.body.name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            price: req.body.price,
            description : req.body.description,
            stocks:req.body.stocks,
            ProductDistrict:req.body.ProductDistrict
        });
       
      
        res.status(200).json({
            message: "Trichy Product Inserted",
            TrichyProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}


exports.TrichyProductGet = async (req, res) => {
    try {
        const TrichyProducts = await TrichyModel.find()
        res.status(200).json({
            message: "data getted",
            TrichyProducts
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.TrichyProductGetSingle = async (req, res) => {
    try {
        const TrichyProduct = await TrichyModel.findById(req.params.id)

        if (!TrichyProduct) {
            return res.status(401).json({
                message: "TrichyProduct by this id not found"
            })
        }
        res.status(201).json({
            TrichyProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.TrichyProductUpdate = async (req, res) => {    try {
        let Trichyupdate = await TrichyModel.findById(req.params.id);
        if (!Trichyupdate) {
            return res.status(401).json({
                message: "TrichyProduct by this id not found"
            })
        }
      Trichyupdate = await TrichyModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            Trichyupdate
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.TrichyProductDelete = async (req, res) => {
    try {
        let TrichyProD = await TrichyModel.findById(req.params.id);
        if (! TrichyProD) {
            return res.status(401).json({
                message: "Trichy product by this id not found"
            })
        }
        await TrichyProD.deleteOne();
        res.status(200).json({
            message: "Trichy Product deleted"
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}

//Tiruppur Operations
exports.TiruppurProductInsert = async (req, res) => {
    try {
       
        const result = await cloudinary.uploader.upload(req.body.image, {
            folder: "products",
        })

        const TiruppurProduct = await TiruppurModel.create({
            name:req.body.name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            price: req.body.price,
            description : req.body.description,
            stocks:req.body.stocks,
            ProductDistrict:req.body.ProductDistrict
        });
       
      
        res.status(200).json({
            message: "Tiruppur Product Inserted",
            TiruppurProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}



exports.TiruppurProductGet = async (req, res) => {
    try {
        const TiruppurProducts = await TiruppurModel.find();
        res.status(200).json({
            message: "data getted",
            TiruppurProducts
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.TiruppurProductGetSingle = async (req, res) => {
    try {
        const TiruppurProduct = await TiruppurModel.findById(req.params.id);
        if (! TiruppurProduct) {
            return res.status(401).json({
                message: "TiruppurProduct by this id not found"
            })
        }
        res.status(201).json({
            TiruppurProduct
        })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.TiruppurProductUpdate = async (req, res) => {    try {
        // let Tiruppurupdate = await TiruppurModel.findById(req.params.id);
        // if (! Tiruppurupdate) {
        //     return res.status(401).json({
        //         message: "TiruppurProduct by this id not found"
        //     })
        // }
       let Tiruppurupdate = await TiruppurModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            Tiruppurupdate
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.TiruppurProductDelete = async (req, res) => {
    try {
        let TiruppurProD = await TiruppurModel.findById(req.params.id);
        if (!TiruppurProD) {
            return res.status(401).json({
                message: "Tiruppur product by this id not found"
            })
        }
        await TiruppurProD.deleteOne();
        res.status(200).json({
            message: "Pollachi Product deleted"
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}