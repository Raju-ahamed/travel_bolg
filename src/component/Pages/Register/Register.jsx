import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <div className=' mt-30'>
            <form className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-lg border p-4">
                <legend className="text-2xl text-center font-bold">Plz, Register For Book!!!</legend>

                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Enter Your Name" />

                <label className="label">Photo</label>
                <input type="url" className="input" placeholder="your Photo url" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

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