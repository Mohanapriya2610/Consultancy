const express = require('express');
const router = express.Router();
const {register,login,logoutuser,UserProfile} = require('../controllers/AuthController')
const {InsertCoordinator,deleteCoordinator,GetCoordinators,CoordinatorsUpdate, getSingleCoordinator} = require('../controllers/CoordinatorController');
const {WorkersUpdate,InsertWorker,deleteWorker,getSingleWorker,GetWorkers} = require('../controllers/WorkerController')
const {authorizeRoles,AuthenticateRoutes} = require('../middleware/Authentiation')

//Admin Login Routes
router.post('/admin/register',register);
router.post('/admin/login',login);
router.get('/admin/logout',logoutuser)
router.get('/admin/profile',AuthenticateRoutes,UserProfile)

//Admin User Control Routes && Admin coordinator routes
router.post('/admin/co/insert',InsertCoordinator)
router.get('/admin/co/get/:id',getSingleCoordinator)
router.put('/admin/co/update/:id',CoordinatorsUpdate)
router.delete('/admin/co/delete/:id',deleteCoordinator)
router.get('/admin/co/gets',GetCoordinators);
//Workers Routes
router.post('/admin/wo/insert',InsertWorker)
router.get('/admin/wo/get/:id',getSingleWorker)
router.put('/admin/wo/update/:id',WorkersUpdate)
router.delete('/admin/wo/delete/:id',deleteWorker)
router.get('/admin/wo/gets',GetWorkers)




module.exports = router