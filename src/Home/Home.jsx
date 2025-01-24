import React from 'react';
import Navbar from '../HomePage/Header/Navbar';
import Banner from '../HomePage/Header/Banner';
import Transforming from '../HomePage/Main/Transforming';
import Features from '../HomePage/Features/Features';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Transforming></Transforming>
            <Features></Features>
        </div>
    );
};

export default Home;