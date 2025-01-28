import React from 'react';
import Navbar from '../HomePage/Header/Navbar';
import Banner from '../HomePage/Header/Banner';
import Transforming from '../HomePage/Main/Transforming';
import Features from '../HomePage/Features/Features';
import Testimonial from '../HomePage/Testimonial/Testimonial';
import Pricing from '../HomePage/Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Transforming></Transforming>
            <Features></Features>
            <Testimonial></Testimonial>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;