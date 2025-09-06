import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Ghostwriting',
      description:
        'Writing LinkedIn posts, articles, and newsletters that sound exactly like my clients.',
      icon: '✍️',
      features: [
        'Personal brand voice',
        'Engaging storytelling',
        'Strategic positioning',
      ],
    },
    {
      title: 'Content Strategy',
      description:
        'Designing content frameworks and posting plans that align with brand goals.',
      icon: '🎯',
      features: [
        'Content pillars',
        'Audience analysis',
        'Performance optimization',
      ],
    },
    {
      title: 'Copywriting',
      description:
        'Crafting persuasive, engaging copy for social media, websites, and campaigns.',
      icon: '📝',
      features: [
        'Persuasive messaging',
        'Engaging headlines',
        'Brand consistency',
      ],
    },
    {
      title: 'Editing & Refinement',
      description:
        'Polishing existing content to elevate clarity, tone, and impact.',
      icon: '✂️',
      features: ['Grammar & style', 'Tone alignment', 'Content optimization'],
    },
    {
      title: 'Video Script Writing',
      description:
        'Engaging scripts for LinkedIn, YouTube, Reels, or any brand storytelling content',
      icon: '🎬',
      features: [
        'Hook-driven openings',
        'Clear messaging',
        'Call-to-action focus',
      ],
    },

    {
      title: 'Profile Optimization',
      description: 'Because your LinkedIn is a landing page, not just a résumé',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      features: [
        'Compelling headlines',
        'Strategic keywords',
        'Professional positioning',
      ],
    },
  ];

  return (
    <section id="services" className="py-8 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            What I Can Do For You
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you're building a personal brand from scratch, growing a
            startup, or scaling your agency—your content should be doing the
            heavy lifting for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-xl text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 text-sm"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
