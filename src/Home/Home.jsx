import React from 'react';
import Navbar from '../HomePage/Header/Navbar';
import Banner from '../HomePage/Header/Banner';
import Transforming from '../HomePage/Main/Transforming';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Transforming></Transforming>
        </div>
    );
};

export default Home;