import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm py-3 border-b border-zinc-200 dark:border-zinc-800' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-extrabold tracking-tighter text-zinc-900 dark:text-white flex items-center gap-1 group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-300 group-hover:from-orange-500 group-hover:to-red-500 dark:group-hover:from-teal-400 dark:group-hover:to-cyan-300 transition-all duration-500">Natanim</span>
            <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-emerald-400 group-hover:scale-150 transition-transform duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 border border-zinc-200 dark:border-zinc-800/60 rounded-full px-4 py-2 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="relative px-4 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-emerald-400 transition-colors group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 dark:bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
             <ThemeToggle />
             <a href="#contact" className="px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-full hover:scale-105 transition-transform shadow-md">
               Let's Talk
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-3">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 focus:outline-none hover:bg-amber-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 shadow-xl absolute top-full left-0 right-0"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    className="text-zinc-700 hover:text-amber-600 dark:text-zinc-300 dark:hover:text-emerald-400 transition-colors py-3 px-4 rounded-xl text-lg font-medium hover:bg-amber-50 dark:hover:bg-zinc-800/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;