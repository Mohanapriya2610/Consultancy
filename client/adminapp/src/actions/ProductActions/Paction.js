import { PollachiRequest, PollachiSuccess, PollachiFail, clearError, clearPollachi, newPollachiRequest, newPollachiSuccess, newPollachiFail, clearPollachiCreated, deletePollachiRequest, deletePollachiSuccess, deletePollachiFail, clearPollachiDeleted, updatePollachiRequest, updatePollachiSuccess, updatePollachiFail, clearPollachiUpdated, adminPollachiRequest, adminPollachiSuccess, adminPollachiFail } from '../../Slices/PproductSlice'
import axios from 'axios'
export const getPollachi = id => async (dispatch) => {
    try {
        dispatch(PollachiRequest());
        const { data } = await axios.get(`/product/district/pollachi/get/${id}`);
        dispatch(PollachiSuccess(data))
    } catch (err) {
        //handle error
        dispatch(PollachiFail(err.response.data.message))
    }
}

export const createNewPr = CoData => async (dispatch) => {
    try {
        dispatch(newPollachiRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        alert('working')
        const { data } = await axios.post('/product/district/pollachi/insert', CoData, config);
        // alert(data.worker.name)
        console.log(data)
        dispatch(newPollachiSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newPollachiFail(error.response.data.message))
    }
}

export const getAdminPollachis = async (dispatch) => {
    try {
        dispatch(adminPollachiRequest())
        const { data } = await axios.get('/product/district/pollachi/gets');
        console.log(data)
        dispatch(adminPollachiSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminPollachiFail(error.response.data.message))
    }
}

export const updatePollachis = (id, CoData) => async (dispatch) => {
    try {
        dispatch(updatePollachiRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.put(`/product/district/pollachi/update/${id}`, CoData, config);
        dispatch(updatePollachiSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updatePollachiFail(error.response.data.message))
    }
}


export const deletePollachis = id => async (dispatch) => {
    try {
        dispatch(deletePollachiRequest())
        await axios.delete(`/product/district/pollachi/delete/${id}`);
        dispatch(deletePollachiSuccess())
    } catch (error) {
        //handle error
        dispatch(deletePollachiFail(error.response.data.message))
    }

}



