import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAdminworkers, deleteworkers } from '../../../actions/WoAction'
import { useSelector, useDispatch } from 'react-redux'

const WorkerTable = () => {

    const { Workers = [], isWorkerDeleted } = useSelector(state => state.WorkerState)
    const dispatch = useDispatch()
    console.log(Workers)
    const deleteHandler = (e, id) => {
        e.target.disabled = true;
        dispatch(deleteworkers(id))
    }

    useEffect(() => {
        dispatch(getAdminworkers);

    }, [dispatch, isWorkerDeleted])

    return (
        <div>
            <center>
                <div className="form">
                    {
                        Workers.length > 0 ?
                            (
                                <>
                                    <table class="table table-striped">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Salary</th>
                                            <th>Age</th>
                                            <th>Contact</th>
                                            <th>Loaction</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>

                                        {
                                            Workers.map((item) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                {
                                                                    item.name
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.email
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.salary
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.age
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    item.mobile
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    item.location
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/wo/update/${item._id}`}><button style={{ backgroundColor: 'orange', border: 'none', width: '105px', height: '35px', borderRadius: '5px', color: 'white' }}>Edit</button></Link>
                                                            </td>
                                                            <td>
                                                                <button onClick={e => deleteHandler(e, item._id)} style={{ backgroundColor: 'red', border: 'none', width: '85px', height: '35px', borderRadius: '5px', color: 'white' }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </table>
                                </>
                            ) :
                            (<></>)
                    }
                </div>
            </center>
        </div>

    )
}

export default WorkerTable