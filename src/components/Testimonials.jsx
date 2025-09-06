import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Sharon Arrindell',
    role: 'Founder, Startup X',
    text: 'Sarah’s content transformed our LinkedIn presence. Engagement doubled in just 2 months!',
  },
  {
    name: 'Justin',
    role: 'Content Creator,',
    text: 'Her ghostwriting captures our voice perfectly. Leads and visibility increased significantly.',
  },
  {
    name: 'Emily Johnson',
    role: 'Coach & Consultant',
    text: 'Working with Sarah made LinkedIn content easy and impactful. Highly recommend her strategy.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Testimonials
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
            <div>
              <h3 className="text-lg font-bold text-yellow-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
