import { CoimbatoreRequest,CoimbatoreSuccess,CoimbatoreFail,newCoimbatoreRequest,newCoimbatoreSuccess,newCoimbatoreFail,clearCoimbatoreCreated,deleteCoimbatoreRequest,deleteCoimbatoreSuccess,deleteCoimbatoreFail,clearCoimbatoreDeleted,updateCoimbatoreRequest,updateCoimbatoreSuccess,updateCoimbatoreFail,clearCoimbatoreUpdated,adminCoimbatoreRequest,adminCoimbatoreSuccess,adminCoimbatoreFail} from '../../Slices/CproductSlice'
import axios from 'axios'
export const getCoimbatore = id => async (dispatch) => {
    try {
        dispatch(CoimbatoreRequest());
        const { data } = await axios.get(`/product/district/coimbatore/get/${id}`);
        dispatch(CoimbatoreSuccess(data))
    } catch (err) {
        //handle error
        dispatch(CoimbatoreFail(err.response.data.message))
    }
}

export const createNewPr = CoData => async (dispatch) => {
    try {
        dispatch(newCoimbatoreRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        alert('working')
        const { data } = await axios.post('/product/district/coimbatore/insert', CoData, config);
        // alert(data.worker.name)
        console.log(data)
        dispatch(newCoimbatoreSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newCoimbatoreFail(error.response.data.message))
    }
}

export const getAdminCoimbatores = async (dispatch) => {
    try {
        dispatch(adminCoimbatoreRequest())
        const { data } = await axios.get('/product/district/coimbatore/gets');
        console.log(data)
        dispatch(adminCoimbatoreSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminCoimbatoreFail(error.response.data.message))
    }
}




// Erodes

export const updateCoimbatores = (id, CoData) => async (dispatch) => {

    try {
        dispatch(updateCoimbatoreRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.put(`/product/district/coimbatore/update/${id}`, CoData, config);
        dispatch(updateCoimbatoreSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateCoimbatoreFail(error.response.data.message))
    }
}


export const deleteCoimbatores = id => async (dispatch) => {
    try {
        dispatch(deleteCoimbatoreRequest())
        await axios.delete(`/product/district/coimbatore/delete/${id}`);
        dispatch(deleteCoimbatoreSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteCoimbatoreFail(error.response.data.message))
    }

}



