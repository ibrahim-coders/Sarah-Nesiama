import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

import FeaturedWork from './components/Featured-Work';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
