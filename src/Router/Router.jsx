import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Base from '../Base';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: "/",
        element:<Base></Base>,
        children: [
            
        ]
    }
])

export default router;