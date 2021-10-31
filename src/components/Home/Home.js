import React from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Subscribe from '../Subscribe/Subscribe';
import Tours from '../Tours/Tours';

const Home = () => {
    // home section
    return (
        <div className="marginTop">
            <Banner />
            <Tours />
            <News />
            <Subscribe />
        </div>
    );
};

export default Home;