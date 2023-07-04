const { createSlice } = require("@reduxjs/toolkit");

const PollachiProduct = createSlice({
    name:"Pollachi Product",
    initialState:{
        loading:true,
        Pollachi:{},
        Pollachis:[],
        isPollachiCreated:false,
        isPollachiUpdated:false,
        isPollachiDeleted:false
    },
    reducers:{
       PollachiRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
       PollachiSuccess(state,action){
            return {
                ...state,
                loading:false,
               Pollachi:action.payload.PollachiProduct
            }
        },
       PollachiFail(state,action){
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
         clearPollachi(state, action) {
             return{ 
                ...state,
                Pollachi: {}
             }
         },
         adminPollachiRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminPollachiSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Pollachis: action.payload.PollachiProducts,
            }
        },
        adminPollachiFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newPollachiRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newPollachiSuccess(state,action){
            return {
                ...state,
                loading: false,
                Pollachi: action.payload.PollachiProduct,
                isPollachiCreated: true
            }
         },
         newPollachiFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isPollachiCreated: false
            }
        },
        clearPollachiCreated(state, action) {
            return {
                ...state,
                isPollachiCreated: false
            }
        },
        deletePollachiRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deletePollachiSuccess(state, action){
            return {
                ...state,
                loading: false,
                isPollachiDeleted: true
            }
        },
        deletePollachiFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearPollachiDeleted(state, action) {
            return {
                ...state,
                isPollachiDeleted: false
            }
        },

        updatePollachiRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updatePollachiSuccess(state, action){
            return {
                ...state,
                loading: false,
                isPollachiUpdated: true
            }
        },
        updatePollachiFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearPollachiUpdated(state, action) {
            return {
                ...state,
                isPollachiUpdated: false
                
            }
        },
       


    }

})

const {actions,reducer} = PollachiProduct;

export const {PollachiRequest,PollachiSuccess,PollachiFail,clearError,clearPollachi,newPollachiRequest,newPollachiSuccess,newPollachiFail,clearPollachiCreated,deletePollachiRequest,deletePollachiSuccess,deletePollachiFail,clearPollachiDeleted,updatePollachiRequest,updatePollachiSuccess,updatePollachiFail,clearPollachiUpdated,adminPollachiRequest,adminPollachiSuccess,adminPollachiFail} = actions;

export default reducer