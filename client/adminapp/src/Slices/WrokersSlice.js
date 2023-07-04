const { createSlice } = require("@reduxjs/toolkit");

const WorkerSlice = createSlice({
    name:"Worker",
    initialState:{
        loading:true,
        Worker:{},
        Workers:[],
        isWorkerCreated:false,
        isWorkerUpdated:false,
        isWorkerDeleted:false
    },
    reducers:{
        WorkerRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
        WorkerSuccess(state,action){
            return {
                ...state,
                loading:false,
                Worker:action.payload.worker
            }
        },
        WorkerFail(state,action){
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
         clearWorker(state, action) {
             return{ 
                ...state,
                Worker: {}
             }
         },
         adminWorkerRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        adminWorkerSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Workers: action.payload.workers
            }
        },
        adminWorkerFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
         newWorkerRequest(state,action){
            return {
                ...state,
                loading: true
            }
         },
         newWorkerSuccess(state,action){
            return {
                ...state,
                loading: false,
                Worker: action.payload.Worker,
                isWorkerCreated: true
            }
         },
         newWorkerFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isWorkerCreated: false
            }
        },
        clearWorkerCreated(state, action) {
            return {
                ...state,
                isWorkerCreated: false
            }
        },
        deleteWorkerRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        deleteWorkerSuccess(state, action){
            return {
                ...state,
                loading: false,
                isWorkerDeleted: true
            }
        },
        deleteWorkerFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearWorkerDeleted(state, action) {
            return {
                ...state,
                isWorkerDeleted: false
            }
        },

        updateWorkerRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        updateWorkerSuccess(state, action){
            return {
                ...state,
                loading: false,
                isWorkerUpdated: true
            }
        },
        updateWorkerFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
            }
        },
        clearWorkerUpdated(state, action) {
            return {
                ...state,
                isWorkerUpdated: false
                
            }
        },
       

    }
})



const {actions,reducer} = WorkerSlice;

export const {WorkerRequest,WorkerSuccess,WorkerFail,clearError,clearWorker,newWorkerRequest,newWorkerSuccess,newWorkerFail,clearWorkerCreated,deleteWorkerRequest,deleteWorkerSuccess,deleteWorkerFail,clearWorkerDeleted,updateWorkerRequest,updateWorkerSuccess,updateWorkerFail,clearWorkerUpdated,adminWorkerRequest,adminWorkerSuccess,adminWorkerFail} = actions;

export default reducer