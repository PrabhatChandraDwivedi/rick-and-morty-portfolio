import React from 'react';

const AboutSection = () => (
  <section className="about-section text-white text-center w-full mx-auto">
    <div className="about-section bg-about-gradient p-8 rounded-lg shadow-about-shadow text-white mx-auto">
      <h1 className="font-serif text-5xl mb-6 text-center pb-2 relative group hover:cursor-pointer">
        About Me
        <span className="absolute left-1/2 bottom-0 h-1 w-0 bg-purple-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-1/2"></span>
      </h1>
      <p className="text-lg leading-7 mb-4">
        I'm a developer from <span className="font-bold text-pink-accent">Dimension C-137</span>, building intergalactic applications in <span className="font-bold text-blue-accent">React</span> and <span className="font-bold text-yellow-accent">JavaScript</span>.
      </p>
      <p className="text-lg leading-7">
        <span className="font-bold text-purple-accent">Skills:</span> JavaScript, React, CSS, HTML, Sci-Fi Interfaces, Alien API Integration.
      </p>
    </div>
  </section>
);

export default AboutSection;
