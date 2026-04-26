import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Auth/AuthContex';

const Login = () => {
    const { userLogin, gogleSginIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(
                () => {
                    navigate(location?.state ? location.state : "/")
                }
            )
            .catch(err => console.log(err))

    }
    const handleGoggleLogin = () => {
        gogleSginIn().then(() => {
            navigate(location?.state ? location.state : "/")
        }).catch();
    }
    return (
        <div className='w-11/12'>
            <div className=' mt-30'>
                <form onSubmit={handleLogIn} className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="font-bold text-2xl text-center">Please, Log in!!</legend>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral w-50 mt-4">Login</button>
                    <p>Dont Have Any Acount?
                        <NavLink to="/register">
                            <span className='text-blue-600 underline'> Reister</span>
                        </NavLink> </p>
                </form>
            </div>
            <div className='grid grid-cols-1 m-5 w-130 mx-auto gap-2 justify-center'>

                <button onClick={handleGoggleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>

                <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                    <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                    Login with Facebook
                </button>

            </div>

        </div>
    );
};

export default Login;