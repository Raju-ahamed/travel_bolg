import React from 'react';
import NavBar from '../../Navbar/NavBar';
import { useLoaderData, useParams } from 'react-router';
import Booking from './Booking';

const AllBooking = () => {
    const { id } = useParams()
    const allBlog = useLoaderData();
    const blogs = allBlog.filter(blog => blog.id === Number(id));
    return (
        <div>
            <NavBar></NavBar>
            <div>
                {
                    blogs.map((blog) =>
                        <Booking
                            key={blog.id}
                            blog={blog}
                        ></Booking>
                    )
                }
            </div>
        </div>
    );
};

export default AllBooking;