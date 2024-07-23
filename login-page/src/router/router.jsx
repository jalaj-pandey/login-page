import React from 'react'
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from '../App';
import Login from '../Login';
import Welcome from '../Welcome';
import Register from '../../Register';

  const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>  
    },
    {
        path: "/login",
        element: <Login/>  
    },
    {
        path: "/register",
        element: <Register/>  
    },
    {
        path: "/welcome",
        element: <Welcome/>  
    },
  ])


  export default router