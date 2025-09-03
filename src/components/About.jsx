// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
            Hi, I’m{' '}
            <span className="font-bold text-yellow-500 ">Sarah Nesiama</span> a
            LinkedIn Ghostwriter and Content Strategist passionate about helping
            creators, entrepreneurs, founders and brands amplify their voice
            online and sought after in their industry . I combine storytelling,
            strategy, and a playful, bold tone to turn ideas into content that
            connects, engages, and converts.
          </p>

          <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
            I thrive on making personal brands feel human, visible, and magnetic
            - turning silent observers into raving fans. When I’m not crafting
            content, I’m probably analyzing trends, curating inspiration, or
            helping brands find their voice.
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            With <span className="font-bold">100+ posts</span> and{' '}
            <span className="font-bold">20+ video scripts</span> written, I turn
            ideas into engaging content that builds authority, attracts clients,
            and leaves a lasting impression.
          </p>
        </div>

        {/* Decorative Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/src/assets/IMG.PNG"
            alt="Sarah Nesiama"
            className="w-96 h-96 object-cover rounded-xl shadow-lg border-4 border-yellow-400"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
