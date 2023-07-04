import {ErodeRequest,ErodeSuccess,ErodeFail,clearError,clearErode,newErodeRequest,newErodeSuccess,newErodeFail,clearErodeCreated,deleteErodeRequest,deleteErodeSuccess,deleteErodeFail,clearErodeDeleted,updateErodeRequest,updateErodeSuccess,updateErodeFail,clearErodeUpdated,adminErodeRequest,adminErodeSuccess,adminErodeFail } from '../../Slices/EproductSlice'
import axios from 'axios'
export const getErode = id => async (dispatch) => {
    try {
        dispatch(ErodeRequest());
        const { data } = await axios.get(`/product/district/erode/get/${id}`);
        dispatch(ErodeSuccess(data))
    } catch (err) {
        //handle error
        dispatch(ErodeFail(err.response.data.message))
    }
}

export const createNewPr = CoData => async (dispatch) => {
    try {
        dispatch(newErodeRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        alert('working')
        const { data } = await axios.post('/product/district/erode/insert', CoData,config);
        // alert(data.worker.name)
        console.log(data)
        dispatch(newErodeSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newErodeFail(error.response.data.message))
    }
}

export const getAdminErodes = async (dispatch) => {
    try {
        dispatch(adminErodeRequest())
        const { data } = await axios.get('/product/district/erode/gets');
        console.log(data)
        dispatch(adminErodeSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminErodeFail(error.response.data.message))
    }

}




// Erodes

export const updateErodes = (id, CoData) => async (dispatch) => {

    try {
        dispatch(updateErodeRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.put(`/product/district/erode/update/${id}`, CoData,config);
        dispatch(updateErodeSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateErodeFail(error.response.data.message))
    }
}


export const deleteErodes = id => async (dispatch) => {
    try {
        dispatch(deleteErodeRequest())
        await axios.delete(`/product/district/erode/delete/${id}`);
        dispatch(deleteErodeSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteErodeFail(error.response.data.message))
    }

}



