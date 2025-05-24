import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import LeadingGroups from './LeadingGroups';
import FeaturedGroups from './FeaturedGroups';
import Footer from './Footer'

const Home = () => {

    return (
        <div className='bg-amber-100 '>
            <Banner></Banner>
            <FeaturedGroups></FeaturedGroups>
            <HowItWorks></HowItWorks>
            <LeadingGroups></LeadingGroups>
        </div>
    );
};

export default Home;