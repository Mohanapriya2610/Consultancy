const { createSlice } = require("@reduxjs/toolkit");

const TiruppurProduct = createSlice({
    name:"Tiruppur Product",
    initialState:{
        loading:true,
        Tiruppur:{},
        Tiruppurs:[],
        isTiruppurCreated:false,
        isTiruppurUpdated:false,
        isTiruppurDeleted:false
    },
    reducers:{
       TiruppurRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
       TiruppurSuccess(state,action){
            return {
                ...state,
                loading:false,
               Tiruppur:action.payload.TiruppurProduct
            }
        },
       TiruppurFail(state,action){
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
         clearTiruppur(state, action) {
             return{ 
                ...state,
                Tiruppur: {}
             }
         },
         adminTiruppurRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminTiruppurSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Tiruppurs: action.payload.TiruppurProducts,
            }
        },
        adminTiruppurFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newTiruppurRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newTiruppurSuccess(state,action){
            return {
                ...state,
                loading: false,
                Tiruppur: action.payload.TiruppurProduct,
                isTiruppurCreated: true
            }
         },
         newTiruppurFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isTiruppurCreated: false
            }
        },
        clearTiruppurCreated(state, action) {
            return {
                ...state,
                isTiruppurCreated: false
            }
        },
        deleteTiruppurRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deleteTiruppurSuccess(state, action){
            return {
                ...state,
                loading: false,
                isTiruppurDeleted: true
            }
        },
        deleteTiruppurFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearTiruppurDeleted(state, action) {
            return {
                ...state,
                isTiruppurDeleted: false
            }
        },

        updateTiruppurRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateTiruppurSuccess(state, action){
            return {
                ...state,
                loading: false,
                isTiruppurUpdated: true
            }
        },
        updateTiruppurFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearTiruppurUpdated(state, action) {
            return {
                ...state,
                isTiruppurUpdated: false
                
            }
        },
       


    }

})

const {actions,reducer} = TiruppurProduct;

export const {TiruppurRequest,TiruppurSuccess,TiruppurFail,clearError,clearTiruppur,newTiruppurRequest,newTiruppurSuccess,newTiruppurFail,clearTiruppurCreated,deleteTiruppurRequest,deleteTiruppurSuccess,deleteTiruppurFail,clearTiruppurDeleted,updateTiruppurRequest,updateTiruppurSuccess,updateTiruppurFail,clearTiruppurUpdated,adminTiruppurRequest,adminTiruppurSuccess,adminTiruppurFail} = actions;

export default reducer