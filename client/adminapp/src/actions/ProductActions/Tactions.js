import { TiruppurRequest, TiruppurSuccess, TiruppurFail, clearError, clearTiruppur, newTiruppurRequest, newTiruppurSuccess, newTiruppurFail, clearTiruppurCreated, deleteTiruppurRequest, deleteTiruppurSuccess, deleteTiruppurFail, clearTiruppurDeleted, updateTiruppurRequest, updateTiruppurSuccess, updateTiruppurFail, clearTiruppurUpdated, adminTiruppurRequest, adminTiruppurSuccess, adminTiruppurFail } from '../../Slices/TproductSlice'
import axios from 'axios'


export const getTiruppur = id => async (dispatch) => {
    try {
        dispatch(TiruppurRequest());
        const { data } = await axios.get(`/product/district/tiruppur/get/${id}`);
        dispatch(TiruppurSuccess(data))
    } catch (err) {
        //handle error
        dispatch(TiruppurFail(err.response.data.message))
    }
}

export const createNewPr = CoData => async (dispatch) => {
    try {
        dispatch(newTiruppurRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        alert('working')
        const { data } = await axios.post('/product/district/tiruppur/insert', CoData, config);
        // alert(data.worker.name)
        console.log(data)
        dispatch(newTiruppurSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newTiruppurFail(error.response.data.message))
    }
}

export const getAdminTiruppurs = async (dispatch) => {
    try {
        dispatch(adminTiruppurRequest())
        const { data } = await axios.get('/product/district/tiruppur/gets');
        // console.log(data)
        dispatch(adminTiruppurSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminTiruppurFail(error.response.data.message))
    }
}

export const updateTiruppurs = (id, CoData) => async (dispatch) => {

    try {
        dispatch(updateTiruppurRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.put(`/product/district/tiruppur/update/${id}`, CoData, config);
        dispatch(updateTiruppurSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateTiruppurFail(error.response.data.message))
    }
}


export const deleteTiruppurs = id => async (dispatch) => {
    try {
        dispatch(deleteTiruppurRequest())
        await axios.delete(`/product/district/tiruppur/delete/${id}`);
        dispatch(deleteTiruppurSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteTiruppurFail(error.response.data.message))
    }

}



