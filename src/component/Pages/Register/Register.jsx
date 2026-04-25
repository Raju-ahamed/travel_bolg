import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Auth/AuthContex';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleSingUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(data => console.log(data))
            .catch();

    }
    return (
        <div className=' mt-30'>
            <form onSubmit={handleSingUp} className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-lg border p-4">
                <legend className="text-2xl text-center font-bold">Plz, Register For Book!!!</legend>

                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Enter Your Name" />

                <label className="label">Photo</label>
                <input type="text" name='photo' className="input" placeholder="your Photo url" />

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral w-50 mt-4">Register</button>
                <p>Have An Acount?
                    <NavLink to="/login">
                        <span className='text-blue-600 underline'> Log in</span>
                    </NavLink> </p>
            </form>
        </div>
    );
};

export default Register;