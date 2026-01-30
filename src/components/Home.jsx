import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import LeadingGroups from './LeadingGroups';
import FeaturedGroups from './FeaturedGroups';

const Home = () => {

    return (
        <div className='bg-base-100 min-h-screen transition-colors duration-300'>
            <Banner></Banner>
            <FeaturedGroups></FeaturedGroups>
            <HowItWorks></HowItWorks>
            <LeadingGroups></LeadingGroups>
        </div>
    );
};

export default Home;