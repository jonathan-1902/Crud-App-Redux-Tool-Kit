import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/userReducer';


const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector((state) => state.users)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name: name, email: email }))
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for='name'>Name:</label>
                        <input type='text' name='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label for='email'>Email:</label>
                        <input type='email' name='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-info mt-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create
