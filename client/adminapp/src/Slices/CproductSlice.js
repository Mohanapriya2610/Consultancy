const { createSlice } = require("@reduxjs/toolkit");

const CoimbatoreProduct = createSlice({
    name:"Coimbatore Product",
    initialState:{
        loading:true,
        Coimbatore:{},
        Coimbatores:[],
        isCoimbatoreCreated:false,
        isCoimbatoreUpdated:false,
        isCoimbatoreDeleted:false
    },
    reducers:{
      CoimbatoreRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
      CoimbatoreSuccess(state,action){
            return {
                ...state,
                loading:false,
              Coimbatore:action.payload.CoimbatoreProduct
            }
        },
      CoimbatoreFail(state,action){
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
         clearCoimbatore(state, action) {
             return{ 
                ...state,
               Coimbatore: {}
             }
         },
         adminCoimbatoreRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminCoimbatoreSuccess(state, action) {
            return {
                ...state,
                loading: false,
               Coimbatores: action.payload.CoimbatoreProducts,
            }
        },
        adminCoimbatoreFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newCoimbatoreRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newCoimbatoreSuccess(state,action){
            return {
                ...state,
                loading: false,
                Coimbatore: action.payload. CoimbatoreProduct,
                isCoimbatoreCreated: true
            }
         },
         newCoimbatoreFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isCoimbatoreCreated: false
            }
        },
        clearCoimbatoreCreated(state, action) {
            return {
                ...state,
                isCoimbatoreCreated: false
            }
        },
        deleteCoimbatoreRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deleteCoimbatoreSuccess(state, action){
            return {
                ...state,
                loading: false,
                isCoimbatoreDeleted: true
            }
        },
        deleteCoimbatoreFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearCoimbatoreDeleted(state, action) {
            return {
                ...state,
                isCoimbatoreDeleted: false
            }
        },

        updateCoimbatoreRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateCoimbatoreSuccess(state, action){
            return {
                ...state,
                loading: false,
                isCoimbatoreUpdated: true
            }
        },
        updateCoimbatoreFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearCoimbatoreUpdated(state, action) {
            return {
                ...state,
                isCoimbatoreUpdated: false
                
            }
        },
       


    }

})

const {actions,reducer} =CoimbatoreProduct;

export const {CoimbatoreRequest,CoimbatoreSuccess,CoimbatoreFail,clearError,clearErode,newCoimbatoreRequest,newCoimbatoreSuccess,newCoimbatoreFail,clearCoimbatoreCreated,deleteCoimbatoreRequest,deleteCoimbatoreSuccess,deleteCoimbatoreFail,clearCoimbatoreDeleted,updateCoimbatoreRequest,updateCoimbatoreSuccess,updateCoimbatoreFail,clearCoimbatoreUpdated,adminCoimbatoreRequest,adminCoimbatoreSuccess,adminCoimbatoreFail} = actions;

export default reducer