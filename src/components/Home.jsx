import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import LeadingGroups from './LeadingGroups';
import FeaturedGroups from './FeaturedGroups';

const Home = () => {
    // const hobbies = useLoaderData();
    // console.log(hobbies);
    return (
        <div className='bg-amber-100'>
            <Banner></Banner>
            <FeaturedGroups></FeaturedGroups>
            <HowItWorks></HowItWorks>
            <LeadingGroups></LeadingGroups>
        </div>
    );
};

export default Home;