import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthContext } from '../context/authContext';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonials';
import Service14 from '../components/Services';
import Products from '../components/Products'

function Home() {
    const { user } = useContext(AuthContext);
    
    return (
        <>
            <Header/>
            <Hero/>
            <Products/>
            <Service14/>
            <Testimonial/>
            <Footer/>
        </>
    );
}

export default Home;
