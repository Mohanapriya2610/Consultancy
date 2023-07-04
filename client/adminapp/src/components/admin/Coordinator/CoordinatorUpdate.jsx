import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCoordinator, updateCoordinator } from '../../../actions/CoAction'
import { useEffect } from 'react';

const CoordinatorUpdate = () => {
    const [salary, setSalary] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");



    const { isCoordinatorUpdated, error, coordinator } = useSelector(state => state.CoordinatorState)
    // alert(coordinator._id)

    const { id: userId } = useParams();
    // alert(userId)



    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('age', age)
        formData.append('salary', salary);
        formData.append('mobile', mobile);
       
        dispatch(updateCoordinator(userId, formData))
    }

    useEffect(() => {
        dispatch(getCoordinator(userId))
    }, [isCoordinatorUpdated, dispatch])


    useEffect(() => {
        if (coordinator._id) {
            setName(coordinator.name);
            setSalary(coordinator.salary);
            setMobile(coordinator.mobile);
            setAge(coordinator.age)
        }
    }, [coordinator])
    return (
        <div className='form'>
            <form className="mt-4" onSubmit={submitHandler}>
                <div className="form-body">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form__label">Name</label><br/><br/>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form__input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form__label">Age</label><br/><br/>
                        <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} class="form__input" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form__label">Salary</label><br/><br/>
                        <input type="text" name="sal" value={salary} onChange={(e) => setSalary(e.target.value)} class="form__input" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form__label">Mobile</label><br/><br/>
                        <input type="number" name="mob" value={mobile} onChange={(e) => setMobile(e.target.value)} class="form__input" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-warning">UPDATE Coordinator</button>
                </div>
            </form>
        </div>
    )
}

export default CoordinatorUpdate