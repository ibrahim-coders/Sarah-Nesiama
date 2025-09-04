import About from './components/About';
import Contact from './components/Contact';
import FeaturedWork from './components/Featured-Work';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

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
