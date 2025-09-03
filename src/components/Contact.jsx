const WorkWithMe = () => {
  return (
    <section id="work-with-me" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          Contact / Work With Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Ready to make your LinkedIn content work for you? Let’s create content
          that builds influence, attracts clients, and grows your brand.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:snesiama@gmail.com"
            className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
              alt=""
              className="w-6 h-6 text-yellow-500"
            />

            <span className="text-gray-900 font-medium">
              snesiama@gmail.com
            </span>
          </a>

          {/* LinkedIn DM */}
          <a
            href="https://www.linkedin.com/in/sarahnesiama"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src=" https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt=""
              className="w-6 h-6 text-yellow-500"
            />

            <span className="text-gray-900 font-medium">
              Connect on LinkedIn
            </span>
          </a>

          {/* Book Consultation */}
          <a
            href="#"
            className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src=" https://img.icons8.com/?size=100&id=ooWxwd8jnXUw&format=png&color=000000"
              alt=""
              className="w-6 h-6 text-yellow-500"
            />
            <span className="text-gray-900 font-medium">
              Book a 1:1 Session
            </span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
            DM Me "CONTENT"
          </button>
          <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300">
            Book a 1:1 Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
