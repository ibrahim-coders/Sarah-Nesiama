const About = () => {
  return (
    <section id="about" className="pt-10 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
              Hi, I’m{' '}
              <span className="font-bold text-yellow-500">Sarah Nesiama</span>,
              a LinkedIn Ghostwriter and Content Strategist passionate about
              helping creators, entrepreneurs, founders, and brands amplify
              their voice online. I combine storytelling, strategy, and a bold,
              playful tone to turn ideas into content that connects, engages,
              and converts.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
              I thrive on making personal brands feel human, visible, and
              magnetic — turning silent observers into raving fans. When I’m not
              crafting content, I’m analyzing trends, curating inspiration, or
              helping brands find their voice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
