import React from 'react';
import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Home = () => (
    <div style={{background:"black"}}>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
    </div>
);

export default Home;
