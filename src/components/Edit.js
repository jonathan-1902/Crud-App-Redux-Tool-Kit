import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/userReducer';

const Edit = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();//we will take all the users from the userlist
    const users = useSelector((state) => state.users)
    console.log(users);

    const existingUser = users.filter((ele) => ele.id == id);
    console.log(existingUser)
    const { name, email } = existingUser[0];

    // const { name, email } = existingUser[0];
    const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }));
        navigate('/');

    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update Existing User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for='name'>Name:</label>
                        <input type='text' name='name' className='form-control' value={uname} onChange={(e) => setUname(e.target.value)} />
                    </div>
                    <div>
                        <label for='email'>Email:</label>
                        <input type='email' name='email' className='form-control' value={uemail} onChange={(e) => setUemail(e.target.value)} />
                    </div>
                    <button className='btn btn-info mt-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit
