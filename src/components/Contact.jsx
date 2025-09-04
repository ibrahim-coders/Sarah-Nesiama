const Contact = () => {
  return (
    <section id="contact" className="py-6 bg-gray-50">
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
        </div>
        {/* 1:1 Consultation */}
        <div className="text-center">
          <div className="bg-yellow-500 rounded-2xl p-8 shadow-xl text-white max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Plus: 1:1 Consultation
            </h3>
            <p className="text-lg mb-6">
              Level up your content strategy with personalized guidance tailored
              to your brand and goals.
            </p>
            <button className="bg-white text-yellow-500 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition duration-300">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
