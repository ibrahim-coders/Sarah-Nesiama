import About from './components/About';
import WorkWithMe from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WorkWithMe />
    </div>
  );
};

export default App;
