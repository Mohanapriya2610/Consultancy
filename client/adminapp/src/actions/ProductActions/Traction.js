import {TrichyRequest,TrichySuccess,TrichyFail,clearError,clearTrichy,newTrichyRequest,newTrichySuccess,newTrichyFail,clearTrichyCreated,deleteTrichyRequest,deleteTrichySuccess,deleteTrichyFail,clearTrichyDeleted,updateTrichyRequest,updateTrichySuccess,updateTrichyFail,clearTrichyUpdated,adminTrichyRequest,adminTrichySuccess,adminTrichyFail} from '../../Slices/TrproductSlice'
import axios from 'axios'
export const getTrichy = id => async (dispatch) => {
    try {
        dispatch(TrichyRequest());
        const { data } = await axios.get(`/product/district/trichy/get/${id}`);
        dispatch(TrichySuccess(data))
    } catch (err) {
        //handle error
        dispatch(TrichyFail(err.response.data.message))
    }
}

export const createNewPr = CoData => async (dispatch) => {
    try {
        dispatch(newTrichyRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        alert('working')
        const { data } = await axios.post('/product/district/trichy/insert', CoData,config);
        //alert(data.worker.name)
        console.log(data)
        dispatch(newTrichySuccess(data))
    } catch (error) {
        //handle error
        dispatch(newTrichyFail(error.response.data.message))
    }
}

export const getAdminTrichy = async (dispatch) => {
    try {
        dispatch(adminTrichyRequest())
        const { data } = await axios.get('/product/district/trichy/gets');
        console.log(data)
        dispatch(adminTrichySuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminTrichyFail(error.response.data.message))
    }

}

export const updateTrichy = (id, CoData) => async (dispatch) => {
    try {
        dispatch(updateTrichyRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.put(`/product/district/trichy/update/${id}`, CoData,config);
        dispatch(updateTrichySuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateTrichyFail(error.response.data.message))
    }
}


export const deleteTrichy = id => async (dispatch) => {
    try {
        dispatch(deleteTrichyRequest())
        await axios.delete(`/product/district/trichy/delete/${id}`);
        dispatch(deleteTrichySuccess())
    } catch (error) {
        //handle error
        dispatch(deleteTrichyFail(error.response.data.message))
    }

}



