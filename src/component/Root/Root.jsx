import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;