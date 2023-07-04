const { createSlice } = require("@reduxjs/toolkit");

const ErodeProduct = createSlice({
    name:"Erode Product",
    initialState:{
        loading:true,
        Erode:{},
        Erodes:[],
        isErodeCreated:false,
        isErodeUpdated:false,
        isErodeDeleted:false
    },
    reducers:{
       ErodeRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
       ErodeSuccess(state,action){
            return {
                ...state,
                loading:false,
               Erode:action.payload.ErodeProduct
            }
        },
       ErodeFail(state,action){
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
         clearErode(state, action) {
             return{ 
                ...state,
                Erode: {}
             }
         },
         adminErodeRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminErodeSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Erodes: action.payload.ErodeProducts,
            }
        },
        adminErodeFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newErodeRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newErodeSuccess(state,action){
            return {
                ...state,
                loading: false,
                Erode: action.payload.ErodeProduct,
                isErodeCreated: true
            }
         },
         newErodeFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isErodeCreated: false
            }
        },
        clearErodeCreated(state, action) {
            return {
                ...state,
                isErodeCreated: false
            }
        },
        deleteErodeRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deleteErodeSuccess(state, action){
            return {
                ...state,
                loading: false,
                isErodeDeleted: true
            }
        },
        deleteErodeFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearErodeDeleted(state, action) {
            return {
                ...state,
                isErodeDeleted: false
            }
        },

        updateErodeRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateErodeSuccess(state, action){
            return {
                ...state,
                loading: false,
                isErodeUpdated: true
            }
        },
        updateErodeFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearErodeUpdated(state, action) {
            return {
                ...state,
                isErodeUpdated: false
                
            }
        },
       


    }

})

const {actions,reducer} = ErodeProduct;

export const {ErodeRequest,ErodeSuccess,ErodeFail,clearError,clearErode,newErodeRequest,newErodeSuccess,newErodeFail,clearErodeCreated,deleteErodeRequest,deleteErodeSuccess,deleteErodeFail,clearErodeDeleted,updateErodeRequest,updateErodeSuccess,updateErodeFail,clearErodeUpdated,adminErodeRequest,adminErodeSuccess,adminErodeFail} = actions;

export default reducer