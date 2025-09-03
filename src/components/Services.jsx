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
      icon: '💼',
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
