const express = require('express');
const router = express.Router();
const {
    ErodeProductInsert,
    ErodeProductGet,
    ErodeProductGetSingle,
    ErodeProductUpdate,
    ErodeProductDelete,
    CoimbatoreProductInsert,
    CoimbatoreProductGet,
    CoimbatoreProductGetSingle,
    CoimbatoreProductUpdate,
    CoimbatoreProductDelete,
    NammakalProductInsert,
    NammakalProductGet,
    NammakalProductGetSingle,
    NammakalProductUpdate,
    NammakalProductDelete,
    PollachiProductInsert,
    PollachiProductGet,
    PollachiProductGetSingle,
    PollachiProductUpdate,
    PollachiProductDelete,
    TrichyProductInsert,
    TrichyProductGet,
    TrichyProductGetSingle,
    TrichyProductUpdate,
    TrichyProductDelete,
    TiruppurProductInsert,
    TiruppurProductGet,
    TiruppurProductGetSingle,
    TiruppurProductUpdate,
    TiruppurProductDelete,

} = require('../controllers/DistrictController');
// const {authorizeRoles,AuthenticateRoutes} = require('../middleware/Authentiation')

//Erode Routes
router.post('/district/erode/insert', ErodeProductInsert);
router.get('/district/erode/gets', ErodeProductGet);
router.get('/district/erode/get/:id', ErodeProductGetSingle);
router.put('/district/erode/update/:id', ErodeProductUpdate);
router.delete('/district/erode/delete/:id', ErodeProductDelete);

//Coimbatore Routes
router.post('/district/coimbatore/insert', CoimbatoreProductInsert);
router.get('/district/coimbatore/gets', CoimbatoreProductGet);
router.get('/district/coimbatore/get/:id', CoimbatoreProductGetSingle);
router.put('/district/coimbatore/update/:id', CoimbatoreProductUpdate);
router.delete('/district/coimbatore/delete/:id', CoimbatoreProductDelete);

//Nammakal routes
router.post('/district/nammakal/insert',NammakalProductInsert);
router.get('/district/nammakal/gets',NammakalProductGet);
router.get('/district/nammakal/get/:id',NammakalProductGetSingle);
router.put('/district/nammakal/update/:id',NammakalProductUpdate);
router.delete('/district/nammakal/delete/:id',NammakalProductDelete);

//Pollachi Routes
router.post('/district/pollachi/insert',PollachiProductInsert);
router.get('/district/pollachi/gets',PollachiProductGet);
router.get('/district/pollachi/get/:id',PollachiProductGetSingle);
router.put('/district/pollachi/update/:id',PollachiProductUpdate);
router.delete('/district/pollachi/delete/:id',PollachiProductDelete);

//Trichy Routes
router.post('/district/trichy/insert',TrichyProductInsert);
router.get('/district/trichy/gets',TrichyProductGet);
router.get('/district/trichy/get/:id',TrichyProductGetSingle);
router.put('/district/trichy/update/:id',TrichyProductUpdate);
router.delete('/district/trichy/delete/:id',TrichyProductDelete);

//Trippur routes
router.post('/district/tiruppur/insert',TiruppurProductInsert);
router.get('/district/tiruppur/gets',TiruppurProductGet);
router.get('/district/tiruppur/get/:id',TiruppurProductGetSingle);
router.put('/district/tiruppur/update/:id',TiruppurProductUpdate);
router.delete('/district/tiruppur/delete/:id',TiruppurProductDelete);

module.exports = router