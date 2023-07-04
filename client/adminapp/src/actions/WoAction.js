import { WorkerRequest,WorkerSuccess,WorkerFail,clearError,clearWorker,newWorkerRequest,newWorkerSuccess,newWorkerFail,clearWorkerCreated,deleteWorkerRequest,deleteWorkerSuccess,deleteWorkerFail,clearWorkerDeleted,updateWorkerRequest,updateWorkerSuccess,updateWorkerFail,clearWorkerUpdated,adminWorkerRequest,adminWorkerSuccess,adminWorkerFail } from '../Slices/WrokersSlice'
import axios from 'axios'
export const getWorkers = id => async (dispatch) => {
    try {
        dispatch(WorkerRequest());
        const { data } = await axios.get(`/user/admin/wo/get/${id}`);
        dispatch(WorkerSuccess(data))
    } catch (err) {
        //handle error
        dispatch(WorkerFail(err.response.data.message))
    }
}

export const createNewWo = CoData => async (dispatch) => {
    try {
        dispatch(newWorkerRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        alert('working')
        const { data } = await axios.post('/user/admin/wo/insert', CoData,config);
        // alert(data.worker.name)
        console.log(data)
        dispatch(newWorkerSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newWorkerFail(error.response.data.message))
    }
}

export const getAdminworkers = async (dispatch) => {
    try {
        dispatch(adminWorkerRequest())
        const { data } = await axios.get('/user/admin/wo/gets');
        console.log(data)
        dispatch(adminWorkerSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminWorkerFail(error.response.data.message))
    }

}




// workers

export const updateworkers = (id, CoData) => async (dispatch) => {

    try {
        dispatch(updateWorkerRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.put(`/user/admin/wo/update/${id}`, CoData,config);
        dispatch(updateWorkerSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateWorkerFail(error.response.data.message))
    }
}


export const deleteworkers = id => async (dispatch) => {
    try {
        dispatch(deleteWorkerRequest())
        await axios.delete(`/user/admin/wo/delete/${id}`);
        dispatch(deleteWorkerSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteWorkerFail(error.response.data.message))
    }

}



