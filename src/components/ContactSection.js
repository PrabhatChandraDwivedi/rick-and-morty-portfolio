import React from 'react';

const ContactSection = () => (
  <section className="contact-section bg-gray-900 text-white py-10 px-6 rounded-lg shadow-lg max-w-4xl mx-auto">
    <h2 className="text-4xl font-semibold mb-6 text-center inline-block pb-2 relative group">
      Get in Touch
      <span className="absolute left-0 bottom-0 h-1 w-0 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
    <p className="text-lg text-gray-300 leading-7 mb-6 text-center">
      Whether you're looking to collaborate, hire, or just discuss ideas about interdimensional coding, feel free to connect with me.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div className="contact-item bg-gray-800 p-6 rounded-lg hover:shadow-md hover:bg-gray-700 transition duration-300">
        <h3 className="text-xl font-bold text-purple-400 mb-3">Email</h3>
        <p className="text-gray-300">
          <a href="mailto:mr.prabhatdwivedi@gmail.com" className="hover:text-white">
            mr.prabhatdwivedi@gmail.com
          </a>
        </p>
      </div>
      <div className="contact-item bg-gray-800 p-6 rounded-lg hover:shadow-md hover:bg-gray-700 transition duration-300">
        <h3 className="text-xl font-bold text-purple-400 mb-3">LinkedIn</h3>
        <p className="text-gray-300">
          <a
            href="https://in.linkedin.com/in/prabhat-chandra-dwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            prabhat-chandra-dwivedi
          </a>
        </p>
      </div>
      <div className="contact-item bg-gray-800 p-6 rounded-lg hover:shadow-md hover:bg-gray-700 transition duration-300">
        <h3 className="text-xl font-bold text-purple-400 mb-3">GitHub</h3>
        <p className="text-gray-300">
          <a
            href="https://github.com/PrabhatChandraDwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            PrabhatChandraDwivedi
          </a>
        </p>
      </div>
    </div>
    <p className="mt-8 text-center text-gray-400">
      Let's build something amazing together.
    </p>
  </section>
);

export default ContactSection;
