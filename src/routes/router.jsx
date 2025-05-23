import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../components/Home';
import AllGroups from '../components/AllGroups';
import CreateGroup from '../components/CreateGroup';
import Loading from '../components/Loading';
import HobbyDetails from '../components/HobbyDetails';
import Signin from '../components/auth/Signin';
import Signup from '../components/auth/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('http://localhost:3000/hobbies'),
                Component: Home
            },
            {
                path: 'groups',
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('http://localhost:3000/hobbies'),
                Component: AllGroups
            },
            {
                path: '/createGroup',
                Component: CreateGroup
            },
            {
                path: '/group/:id',
                hydrateFallbackElement: <Loading></Loading>,
                loader : ({params}) => fetch(`http://localhost:3000/hobbies/${params.id}`),
                Component: HobbyDetails
            },
            {
                path: '/signin',
                Component: Signin
            },
            {
                path: 'signup',
                Component: Signup
            }
        ]
    }
])
export default router;