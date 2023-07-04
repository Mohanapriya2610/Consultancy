import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './CoodI.css'
import {createNewCo} from '../../../actions/CoAction'
const CoordinatorInsert = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDob] = useState("")
    const [mobile, setMobile] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(createNewCo(name,email,age,dob,salary,mobile,location,password))
    }

    


    return (
        <div className="form">
            <form onSubmit={submitHandler}>
            <label className='q'>Add Coordinator</label>
            <div className="form-body">
                <div className="name">
                    <label className="form__label" for="Name">Name </label><br></br>

                    <input type="text" name="" id="name" value={name} className="form__input" placeholder="Name" onChange={(event) => {
                        setName(event.target.value);
                    }} />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label><br></br>
                    <input type="email" id="email" value={email} className="form__input" placeholder="Email" onChange={(event) => {
                        setEmail(event.target.value);
                    }} />
                </div>
                <div className="salary">
                    <label className="form__label" for="salary">Salary </label><br></br>
                    <input className="form__input" type="number" value={salary} id="salary" placeholder="Salary" onChange={(event) => {
                        setSalary(event.target.value);
                    }} />
                </div>
                <div className="contact">
                    <label className="form__label" for="number">Contact </label><br></br>
                    <input className="form__input" type="number" value={mobile} minLength={10} id="contact" placeholder="contact num" onChange={(event) => {
                        setMobile(event.target.value);
                    }} required />
                </div>
                <div className="city">
                    <label className="form__label" for="city">City </label><br></br>
                    <input className="form__input" type="text" value={location} id="city" placeholder="City" onChange={(event) => {
                        setLocation(event.target.value);
                    }} />
                </div>
                <div className="city">
                    <label className="form__label" for="city">Age </label><br></br>
                    <input className="form__input" type="text" value={age} id="city" placeholder="Age" onChange={(event) => {
                        setAge(event.target.value);
                    }} />
                </div>
                <div className="city">
                    <label className="form__label" for="city">Date of birth</label><br></br>
                    <input className="form__input" type="date" value={dob} id="city" placeholder="City" onChange={(event) => {
                        setDob(event.target.value);
                    }} />
                </div>
                <div className="city">
                    <label className="form__label" for="city">Password</label><br></br>
                    <input className="form__input" type="password" value={password} id="city" placeholder="password" onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                </div>
                <div className="v">
                    <button type="submit" className="btn1">Add</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default CoordinatorInsert