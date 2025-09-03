import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['about', 'services', 'work', 'contact'];

  return (
    <nav className="bg-white shadow fixed top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h2 className="text-yellow-950 font-bold text-2xl">Sarah Nesiama</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map(section => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 font-bold text-xl"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book a Call Button - Desktop */}
        <div className="hidden md:block">
          <Link
            to="book-call"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-200"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {menuItems.map((section, index) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:text-yellow-600 font-bold text-xl"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * menuItems.length }}
              >
                <Link
                  to="book-call"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer bg-yellow-400 text-sl text-s px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-200"
                >
                  Book a Call
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
