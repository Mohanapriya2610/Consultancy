const { createSlice } = require("@reduxjs/toolkit");

const CoordinatoreSlice = createSlice({
    name:"coordinator",
    initialState:{
        loading:true,
        coordinator:{},
        coordinators:[],
        isCoordinatorCreated:false,
        isCoordinatorUpdated:false,
        isCoordinatorDeleted:false
    },
    reducers:{
        coordinatorRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
        coordinatorSuccess(state,action){
            return {
                ...state,
                loading:false,
                coordinator:action.payload.coordinator
            }
        },
        coordinatorFail(state,action){
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
         clearCoordinator(state, action) {
             return{ 
                ...state,
                coordinator: {}
             }
         },
         adminCoordinatorRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminCoordinatorSuccess(state, action) {
            return {
                ...state,
                loading: false,
                coordinators: action.payload.coordinator,
            }
        },
        adminCoordinatorFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newCoordinatorRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newCoordinatorSuccess(state,action){
            return {
                ...state,
                loading: false,
                coordinator: action.payload.coordinator,
                isCoordinatorCreated: true
            }
         },
         newCoordintorFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isCoordinatorCreated: false
            }
        },
        clearCoordinatorCreated(state, action) {
            return {
                ...state,
                isCoordinatorCreated: false
            }
        },
        deleteCoordinatorRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deleteCoordinatorSuccess(state, action){
            return {
                ...state,
                loading: false,
                isCoordinatorDeleted: true
            }
        },
        deleteCoordinatorFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearCoordinatorDeleted(state, action) {
            return {
                ...state,
                isCoordinatorDeleted: false
            }
        },

        updateCoordinatorRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateCoordinatorSuccess(state, action){
            return {
                ...state,
                loading: false,
                isCoordinatorUpdated: true
            }
        },
        updateCoordinatorFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearCoordinatorUpdated(state, action) {
            return {
                ...state,
                isCoordinatorUpdated: false
                
            }
        },
       

    }
})



const {actions,reducer} = CoordinatoreSlice;

export const {coordinatorRequest,coordinatorSuccess,coordinatorFail,clearError,clearCoordinator,newCoordinatorRequest,newCoordinatorSuccess,newCoordintorFail,clearCoordinatorCreated,deleteCoordinatorRequest,deleteCoordinatorSuccess,deleteCoordinatorFail,clearCoordinatorDeleted,updateCoordinatorRequest,updateCoordinatorSuccess,updateCoordinatorFail,clearCoordinatorUpdated,adminCoordinatorRequest,adminCoordinatorSuccess,adminCoordinatorFail} = actions;

export default reducer