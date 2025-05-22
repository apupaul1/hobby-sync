import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../components/Home';
import AllGroups from '../components/AllGroups';
import CreateGroup from '../components/CreateGroup';
import Loading from '../components/Loading';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                hydrateFallbackElement : <Loading></Loading>,
                loader: () => fetch('http://localhost:3000/hobbies'),
                Component: Home
            },
        {
            path: 'groups',
            Component: AllGroups
        },
        {
            path: '/createGroup',
            Component: CreateGroup
        }
        ]
    }
])
export default router;