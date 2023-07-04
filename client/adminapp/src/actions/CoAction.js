import { newCoordinatorRequest, newCoordinatorSuccess, newCoordintorFail, clearError, clearCoordinator, clearCoordinatorCreated, coordinatorRequest, coordinatorSuccess, coordinatorFail, deleteCoordinatorRequest, deleteCoordinatorSuccess, deleteCoordinatorFail, clearCoordinatorDeleted, updateCoordinatorSuccess, updateCoordinatorRequest, updateCoordinatorFail, clearCoordinatorUpdated, adminCoordinatorRequest, adminCoordinatorSuccess, adminCoordinatorFail } from '../Slices/CoordinatorSlice'
// import { adminCoordinatorRequest, adminCoordinatorSuccess, adminCoordinatorFail} from '../Slices/Coordinators'
import axios from 'axios'


export const createNewCo = (name, email, age, dob, salary, mobile, location, password) => async (dispatch) => {
    try {
        dispatch(newCoordinatorRequest())
        alert('working')
        const { data } = await axios.post('/user/admin/co/insert', { name, email, age, dob, salary, mobile, location, password });
        // alert(data.productData.pname)
        alert("hii")
        dispatch(newCoordinatorSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newCoordintorFail(error.response.data.message))
    }
}

export const getAdminCoordinator = async (dispatch) => {
    try {
        dispatch(adminCoordinatorRequest())
        const { data } = await axios.get('/user/admin/co/gets');
        dispatch(adminCoordinatorSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminCoordinatorFail(error.response.data.message))
    }
}




// Coordinator

export const updateCoordinator = (id, CoData) => async (dispatch) => {

    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        dispatch(updateCoordinatorRequest())
        alert("hiii")
        const { data } = await axios.put(`/user/admin/co/update/${id}`, CoData, config);
        alert("down")
        console.log(data)
        dispatch(updateCoordinatorSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateCoordinatorFail(error.response.data.message))
    }

}

export const getCoordinator = id => async (dispatch) => {
    try {
        dispatch(coordinatorRequest());
        const { data } = await axios.get(`/user/admin/co/get/${id}`);
        dispatch(coordinatorSuccess(data))
    } catch (err) {
        //handle error
        dispatch(coordinatorFail(err.response.data.message))
    }
}


export const deleteCoordinator = id => async (dispatch) => {
    try {
        dispatch(deleteCoordinatorRequest())
        await axios.delete(`/user/admin/co/delete/${id}`);
        dispatch(deleteCoordinatorSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteCoordinatorFail(error.response.data.message))
    }
}



