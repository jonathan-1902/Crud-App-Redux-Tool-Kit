import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { delteUser } from '../redux/userReducer'

const Home = () => {

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(delteUser({
            id: id
        }))
    }

    return (
        <div className='container'>
            <h2>Crud App with Redux tool kit</h2>
            <Link to='/create' className='btn btn-success my-3'>Create</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className='btn btn-primary ms-2'>Edit</Link>
                                        <button onClick={() => handleDelete(user.id)} className='btn btn-danger ms-2'>Delete</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
