import React from 'react';
import './HeroSection.css';
import RickImage from '../assets/morty.png';

const HeroSection = () => (
    <section className="hero">
        <div className="hero-text">
            <h2>creative designer & web developer.</h2>
            <p>Look Morty, this guy is doing web design. He is doing web design Morty, can you believe that?</p>
            <button className="hero-button">See My Work</button>
        </div>
        <div className="hero-image">
            <img src={RickImage} alt="Rick" />
        </div>
    </section>
);

export default HeroSection;
