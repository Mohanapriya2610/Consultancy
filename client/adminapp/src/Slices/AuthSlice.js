const { createSlice } = require("@reduxjs/toolkit");
//Admin slices
 const AuthSlice = createSlice({
    name:'AuthSlice',
    initialState:{
        loading:true,
        isAuthenticated:false
    },
    reducers:{
        loginRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isAuthenticated: action.payload.success,
                user: action.payload.user
            }
        },
        loginFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        },
        loadUserRequest(state, action) {
            return {
                ...state,
                isAuthenticated: false,
                loading: true,
            }
        },
        loadUserSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        loadUserFail(state, action) {
            return {
                ...state,
                loading: false,
            }
        },
        logoutSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: false,
            }
        },
        logoutFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
    }
 })

 const {actions, reducer} =AuthSlice;

 export const {loginRequest,loginSuccess,loginFail,clearError,loadUserRequest,loadUserSuccess,loadUserFail,logoutSuccess,logoutFail} = actions;

 export default reducer;
