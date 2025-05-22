import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import HowItWorks from './HowItWorks';

const Home = () => {
    const hobbies = useLoaderData();
    console.log(hobbies);
    return (
        <div>
            <Banner></Banner>
            <h2>Home</h2>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;