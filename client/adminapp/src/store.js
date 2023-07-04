import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthReducer from './Slices/AuthSlice'
import CoordinatorReducer from './Slices/CoordinatorSlice';
import WorkerReduer from './Slices/WrokersSlice';
import ErodeReducer from './Slices/EproductSlice';
import CoimbatoreReducer from './Slices/CproductSlice'
import NammakalReducer from './Slices/NproductSlice';
import PollachiReducer from './Slices/PproductSlice';
import TrichyReducer from './Slices/TrproductSlice';
import TiruppurReducer from './Slices/TproductSlice';



const reducer = combineReducers({
        AuthState:AuthReducer,
        CoordinatorState:CoordinatorReducer,
        WorkerState:WorkerReduer,
        ErodeState:ErodeReducer,
        CoimbatoreState:CoimbatoreReducer,
        NammakalState:NammakalReducer,
        PollachiState:PollachiReducer,
        TrichyState:TrichyReducer,
        TiruppurState:TiruppurReducer
})


const store = configureStore(
    {
        reducer,
        middleware:[thunk]
    }
)

export default store;