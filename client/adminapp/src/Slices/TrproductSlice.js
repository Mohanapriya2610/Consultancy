const { createSlice } = require("@reduxjs/toolkit");

const TrichyProduct = createSlice({
    name:"Trichy Product",
    initialState:{
        loading:true,
        Trichy:{},
        Trichys:[],
        isTrichyCreated:false,
        isTrichyUpdated:false,
        isTrichyDeleted:false
    },
    reducers:{
       TrichyRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
       TrichySuccess(state,action){
            return {
                ...state,
                loading:false,
               Trichy:action.payload.TrichyProduct
            }
        },
       TrichyFail(state,action){
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
         clearTrichy(state, action) {
             return{ 
                ...state,
                Trichy: {}
             }
         },
         adminTrichyRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminTrichySuccess(state, action) {
            return {
                ...state,
                loading: false,
                Trichys: action.payload.TrichyProducts,
            }
        },
        adminTrichyFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newTrichyRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newTrichySuccess(state,action){
            return {
                ...state,
                loading: false,
                Trichy: action.payload.TrichyProduct,
                isTrichyCreated: true
            }
         },
         newTrichyFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isTrichyCreated: false
            }
        },
        clearTrichyCreated(state, action) {
            return {
                ...state,
                isTrichyCreated: false
            }
        },
        deleteTrichyRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deleteTrichySuccess(state, action){
            return {
                ...state,
                loading: false,
                isTrichyDeleted: true
            }
        },
        deleteTrichyFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearTrichyDeleted(state, action) {
            return {
                ...state,
                isTrichyDeleted: false
            }
        },

        updateTrichyRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateTrichySuccess(state, action){
            return {
                ...state,
                loading: false,
                isTrichyUpdated: true
            }
        },
        updateTrichyFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearTrichyUpdated(state, action) {
            return {
                ...state,
                isTrichyUpdated: false
                
            }
        },
       


    }

})

const {actions,reducer} = TrichyProduct;

export const {TrichyRequest,TrichySuccess,TrichyFail,clearError,clearTrichy,newTrichyRequest,newTrichySuccess,newTrichyFail,clearTrichyCreated,deleteTrichyRequest,deleteTrichySuccess,deleteTrichyFail,clearTrichyDeleted,updateTrichyRequest,updateTrichySuccess,updateTrichyFail,clearTrichyUpdated,adminTrichyRequest,adminTrichySuccess,adminTrichyFail} = actions;

export default reducer