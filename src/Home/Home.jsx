import React from 'react';
import Navbar from '../HomePage/Header/Navbar';
import Banner from '../HomePage/Header/Banner';
import Transforming from '../HomePage/Main/Transforming';
import Features from '../HomePage/Features/Features';
import Testimonial from '../HomePage/Testimonial/Testimonial';
import Pricing from '../HomePage/Pricing/Pricing';
import Faq from '../HomePage/FAQ/Faq';
import Footer from '../HomePage/Footer/Footer';
import Blogs from '../HomePage/Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Transforming></Transforming>
            <Features></Features>
            <Testimonial></Testimonial>
            <Pricing></Pricing>
            <Faq></Faq>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;