const { createSlice } = require("@reduxjs/toolkit");

const NammakalProduct = createSlice({
    name:"Nammakal Product",
    initialState:{
        loading:true,
        Nammakal:{},
        Nammakals:[],
        isNammakalCreated:false,
        isNammakalUpdated:false,
        isNammakalDeleted:false
    },
    reducers:{
       NammakalRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
       NammakalSuccess(state,action){
            return {
                ...state,
                loading:false,
               Nammakal:action.payload.NammakalProduct
            }
        },
       NammakalFail(state,action){
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearError(state, action) {
            return{
                 ...state,
                 error: null
            }
         },
         clearNammakal(state, action) {
             return{ 
                ...state,
                Nammakal: {}
             }
         },
         adminNammakalRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminNammakalSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Nammakals: action.payload.NammakalProducts,
            }
        },
        adminNammakalFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newNammakalRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newNammakalSuccess(state,action){
            return {
                ...state,
                loading: false,
                Nammakal: action.payload.NammakalProduct,
                isNammakalCreated: true
            }
         },
         newNammakalFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isNammakalCreated: false
            }
        },
        clearNammakalCreated(state, action) {
            return {
                ...state,
                isNammakalCreated: false
            }
        },
        deleteNammakalRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deleteNammakalSuccess(state, action){
            return {
                ...state,
                loading: false,
                isNammakalDeleted: true
            }
        },
        deleteNammakalFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearNammakalDeleted(state, action) {
            return {
                ...state,
                isNammakalDeleted: false
            }
        },

        updateNammakalRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateNammakalSuccess(state, action){
            return {
                ...state,
                loading: false,
                isNammakalUpdated: true
            }
        },
        updateNammakalFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearNammakalUpdated(state, action) {
            return {
                ...state,
                isNammakalUpdated: false
                
            }
        },
       


    }

})

const {actions,reducer} = NammakalProduct;

export const {NammakalRequest,NammakalSuccess,NammakalFail,clearError,clearNammakal,newNammakalRequest,newNammakalSuccess,newNammakalFail,clearNammakalCreated,deleteNammakalRequest,deleteNammakalSuccess,deleteNammakalFail,clearNammakalDeleted,updateNammakalRequest,updateNammakalSuccess,updateNammakalFail,clearNammakalUpdated,adminNammakalRequest,adminNammakalSuccess,adminNammakalFail} = actions;

export default reducer