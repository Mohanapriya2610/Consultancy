const WorkerModel = require('../models/Workers');

exports.InsertWorker = async (req, res) => {
    try {
        // const {name,age,dob,salary,mobile,location} = req.body;
        const Worker = await WorkerModel.create(req.body);
        res.status(201).json({
            message: "Worker Details Inserted Suucessfully",
            Worker
        })
    } catch (err) {
        res.status(201).json({
            message: err
        })
    }
}

exports.GetWorkers = async (req, res) => {
    try {
        const workers = await WorkerModel.find();
        res.status(200).json({
            message: "data getted",
            workers
        })

    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}
exports.getSingleWorker = async(req,res)=>{
    try{
        const worker = await WorkerModel.findById(req.params.id);
        if(!worker){
            return res.status(401).json({
                message: "Worker by this id not found"
            })
        }
        res.status(201).json({
            worker
        })
    }catch(err){
        res.status(401).json({
            message:err
        })
    }
}

exports.WorkersUpdate = async (req, res) => {
    try {
        let Worker = await WorkerModel.findById(req.params.id);
        if (!Worker) {
            return res.status(401).json({
                message: "Worker by this id not found"
            })
        }
        Worker = await WorkerModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            Worker
        })
    } catch (err) {
        res.status(401).json({
            message:err
        })
    }
}

exports.deleteWorker = async(req,res)=>{
    try{
        let Worker = await WorkerModel.findById(req.params.id);
        if (!Worker) {
            return res.status(401).json({
                message: "Worker by this id not found"
            })
        }
        await Worker.deleteOne();
        res.status(200).json({
            message: "Worker deleted"
        })

    }catch(err){
        res.status(401).json({
            message:err
        })

    }
}

