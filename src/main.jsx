import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/Home/Home.jsx';
import Root from './component/Root/Root.jsx';
import Booking from './component/Pages/Booking/AllBooking.jsx';
import AllBooking from './component/Pages/Booking/AllBooking.jsx';
import Login from './component/Pages/Login/Login.jsx';
import Register from './component/Pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> }
    ]
  },
  {
    path: "/booking/:id",
    element: <AllBooking />,
    loader: () => fetch("/blog.json"),
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
