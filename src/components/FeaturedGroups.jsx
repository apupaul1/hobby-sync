import React from 'react';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';

const FeaturedGroups = () => {
    const hobbies = useLoaderData();

    // Get today's date without time (00:00:00)
    const today = new Date();


    // Filter groups where start date is today or in the future
    const upcomingGroups = hobbies.filter(hobby => {
        const startDate = new Date(hobby.date); // assuming `date` is the start date
        
        return startDate <= today;
    });

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold text-center my-6'>🎯 Featured Groups</h2>

            {upcomingGroups.length === 0 ? (
                <p className="text-center text-gray-500">No upcoming groups available.</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {upcomingGroups.map(hobby => (
                        <HobbyCard key={hobby._id} hobby={hobby} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedGroups;
