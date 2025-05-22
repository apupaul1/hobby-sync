import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from './Banner';

const Home = () => {
    const hobbies = useLoaderData();
    console.log(hobbies);
    return (
        <div>
            <Banner></Banner>
            <h2>Home</h2>
        </div>
    );
};

export default Home;