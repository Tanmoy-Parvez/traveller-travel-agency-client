import React from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div className="marginTop">
            <Banner />
            <Tours />
            <News />
        </div>
    );
};

export default Home;