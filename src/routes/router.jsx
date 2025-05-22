import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../components/Home';
import AllGroups from '../components/AllGroups';
import CreateGroup from '../components/CreateGroup';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
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