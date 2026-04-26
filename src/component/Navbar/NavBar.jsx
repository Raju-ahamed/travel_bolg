import React, { useContext } from 'react';
import logo from '/logo.png'
import { NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthContex';

const NavBar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const handleSignOut = () => {
        userSignOut().then().catch();
    }

    return (
        <nav className='navbar bg-transparent absolute top-0 z-50'>
            <div className='grid grid-cols-12  m-4 mx-auto w-11/12  items-center'>
                <div className='flex gap-4 col-span-5 items-center'>
                    <img className='invert brightness-0 invert-[1] w-30 h-9' src={logo} alt="" srcset="" />
                    <input className='rounded text-xs h-7 w-25  p-1 border border-green-800' type="text" placeholder='Search Area' />
                </div>
                <div className='col-span-5 flex gap-5 mx-auto'>
                    <NavLink to="/"><button>Home</button></NavLink>
                    <button>Destination</button>
                    <button>Blog</button>
                    <button>About</button>
                </div>
                <div className='col-span-2 mx-auto'>
                    {
                        user ? <button onClick={handleSignOut} className='btn btn-accent'>Sign Out</button>
                            : <NavLink to="/login"><button className='btn btn-accent'>log in</button></NavLink>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;