import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../components/Home';
import AllGroups from '../components/AllGroups';
import CreateGroup from '../components/CreateGroup';
import Loading from '../components/Loading';
import HobbyDetails from '../components/HobbyDetails';
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';
import MyGroup from '../components/MyGroup';
import PrivateRoute from '../provider/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('http://localhost:3000/hobbies'),
                element: <Home></Home>
            },
            {
                path: 'groups',
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('http://localhost:3000/hobbies'),
                element: <AllGroups></AllGroups>
            },
            {
                path: '/createGroup',
                element:<PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>
            },
            {
                path: '/group/:id',
                hydrateFallbackElement: <Loading></Loading>,
                loader : ({params}) => fetch(`http://localhost:3000/hobbies/${params.id}`),
                element:<PrivateRoute>
                    <HobbyDetails></HobbyDetails>
                </PrivateRoute>
                
            },
            {
                path: '/myGroups',
                element:<PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])
export default router;