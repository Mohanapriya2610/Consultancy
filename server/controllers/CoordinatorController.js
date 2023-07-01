const CoordinatorModel = require('../models/Coordinator');

exports.InsertCoordinator = async (req, res) => {
    try {
        // const {name,age,dob,salary,mobile,location} = req.body;
        const Coordinators = await CoordinatorModel.create(req.body);
        res.status(201).json({
            message: "Coordinator Details Inserted Suucessfully",
            Coordinators
        })
    } catch (err) {
        res.status(201).json({
            message: err
        })
    }
}
//Coordinator Login
exports.LoginCoordinator =async(req,res)=>{
  
}
exports.GetCoordinators = async (req, res) => {
    try {
        const coordinator = await CoordinatorModel.find();
        res.status(200).json({
            message: "data getted",
            coordinator
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.getSingleCoordinator = async(req,res)=>{
    try{
        const coordinator = await CoordinatorModel.findById(req.params.id);
        if(!coordinator){
            return res.status(401).json({
                message: "Coordinator by this id not found"
            })
        }
        res.status(201).json({
            coordinator
        })
    }catch(err){
        res.status(401).json({
            message:err
        })
    }
}

exports.CoordinatorsUpdate = async (req, res) => {
    try {
        console.log(req.params.id)
       
        // if (!coordinator) {
        //     return res.status(401).json({
        //         message: "Coordinator by this id not found"
        //     })
        // }

        // console.log(newCodata)
        let coordinator = await CoordinatorModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        // console.log(coordinator)
        res.status(200).json({
            coordinator,
            message:"updated"
        })
    } catch (err) {
        res.status(401).json({
            message:err
        })
    }
}

exports.deleteCoordinator = async(req,res)=>{
    try{
        let coordinator = await CoordinatorModel.findById(req.params.id);
        if (!coordinator) {
            return res.status(401).json({
                message: "Coordinator by this id not found"
            })
        }
        await coordinator.deleteOne();
        res.status(200).json({
            message: "Coordinator deleted"
        })

    }catch(err){
        res.status(401).json({
            message:err
        })

    }
}

