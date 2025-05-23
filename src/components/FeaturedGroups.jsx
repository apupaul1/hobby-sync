import React from 'react';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';

const FeaturedGroups = () => {
    const hobbies = useLoaderData();
    const today = new Date();

    // console.log(today);

    const oncomingGroups = hobbies.filter(hobby => {
        const startDate = new Date(hobby.date); 
        return startDate <= today;
    });

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold text-center my-12'> Featured Groups</h2>

            {oncomingGroups.length === 0 ? (
                <p className="text-center text-gray-500">No upcoming groups available.</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {oncomingGroups.map(hobby => (
                        <HobbyCard key={hobby._id} hobby={hobby} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedGroups;
