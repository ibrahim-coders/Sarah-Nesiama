import React from 'react';
import sarah from '../assets/Sarah_Nesiama.png';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 min-h-screen flex items-center pt-10">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Helping Personal Brands & Businesses Stand Out on LinkedIn
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-700 mb-6">
            Ghostwriting, Content Strategy, and Storytelling that attracts
            clients and builds authority
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Work With Me
          </button>
        </div>

        <div className="pt-10 flex justify-center md:w-1/2">
          <img
            src={sarah}
            alt="Sarah Nesiama Logo"
            className="w-full  object-cover "
          />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
    </section>
  );
};

export default Hero;
