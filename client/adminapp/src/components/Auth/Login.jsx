import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login,clearAuthError} from '../../actions/AuthAction'
import "./Login.css"
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { loading, error, isAuthenticated } = useSelector(state => state.AuthState);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    useEffect(()=>{
        if(isAuthenticated){
            navigate('/overview')
        }
    },[isAuthenticated])
    return (
        <div class="container">
            <div class="card">
                <div class="card-image">
                </div>
                <form  class="card-form"  onSubmit={submitHandler}>
                    <h4 className="login">LOGIN</h4>
                    <div class="form-group">
                        <label for="usr">Email:</label>
                        <input type="text" className="form-control"   value={email} onChange={(e) => setEmail(e.target.value)} id="" required />
                    </div><br />
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="" required />
                    </div>
                    <div className="input1">
                        <input type="submit" className="btn" />
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Login;