import {loginRequest,loginSuccess,loginFail,clearError,loadUserSuccess,loadUserFail,loadUserRequest,logoutFail,logoutSuccess} from '../Slices/AuthSlice'
import axios from 'axios';


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        alert('what happen')
        let { data } = await axios.post('/user/admin/login', { email, password });
        alert('login success');
        dispatch(loginSuccess(data));
    } catch (err) {
        dispatch(loginFail(err.response.data.message));
    }
}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const loadUser = async (dispatch) => {
    try {
        dispatch(loadUserRequest())
        const { data } = await axios.get(`/user/admin/profile`);
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }
}

export const logout = async (dispatch) => {
    try {
        await axios.get('/user/admin/logout');
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail)
    }
}