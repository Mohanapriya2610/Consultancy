import {NammakalRequest,NammakalSuccess,NammakalFail,clearError,clearNammakal,newNammakalRequest,newNammakalSuccess,newNammakalFail,clearNammakalCreated,deleteNammakalRequest,deleteNammakalSuccess,deleteNammakalFail,clearNammakalDeleted,updateNammakalRequest,updateNammakalSuccess,updateNammakalFail,clearNammakalUpdated,adminNammakalRequest,adminNammakalSuccess,adminNammakalFail} from '../../Slices/NproductSlice'
import axios from 'axios'
export const getNammakal = id => async (dispatch) => {
    try {
        dispatch(NammakalRequest());
        // alert("HI")
        const { data } = await axios.get(`/product/district/nammakal/get/${id}`);
        alert(data)
        dispatch(NammakalSuccess(data))
    } catch (err) {
        //handle error
        dispatch(NammakalFail(err.response.data.message))
    }
}

export const createNewPr = CoData => async (dispatch) => {
    try {
        dispatch(newNammakalRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        alert('working')
        const { data } = await axios.post('/product/district/nammakal/insert', CoData,config);
        // alert(data.worker.name)
        console.log(data)
        dispatch(newNammakalSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newNammakalFail(error.response.data.message))
    }
}

export const getAdminNammakals = async (dispatch) => {
    try {
        dispatch(adminNammakalRequest())
        const { data } = await axios.get('/product/district/nammakal/gets');
        console.log(data)
        dispatch(adminNammakalSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminNammakalFail(error.response.data.message))
    }

}




// Erodes

export const updateNammakals = (id, CoData) => async (dispatch) => {

    try {
        dispatch(updateNammakalRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.put(`/product/district/nammakal/update/${id}`, CoData,config);
        dispatch(updateNammakalSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateNammakalFail(error.response.data.message))
    }
}


export const deleteNammakals = id => async (dispatch) => {
    try {
        dispatch(deleteNammakalRequest())
        await axios.delete(`/product/district/nammakal/delete/${id}`);
        dispatch(deleteNammakalSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteNammakalFail(error.response.data.message))
    }

}



