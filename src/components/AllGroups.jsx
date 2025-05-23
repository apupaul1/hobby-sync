import React from 'react';
import { useLoaderData } from 'react-router';
import SingleHobby from './SingleHobby';

const AllGroups = () => {

    const hobbyAll = useLoaderData();

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-3xl font-extrabold text-center'>All Groups Section</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    hobbyAll.map(singleHobby => (<SingleHobby key={singleHobby._id} singleHobby={singleHobby}></SingleHobby>))
                }
            </div>
        </div>
    );
};

export default AllGroups;