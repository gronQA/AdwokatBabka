import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isTransparent?: boolean;
}

const Header = ({ isTransparent = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Kancelarii', href: '/BGLex/o-kancelarii' },
    { name: 'Specjalizacje', href: '/BGLex/#specjalizacje' },
    { name: 'Zasady współpracy', href: '/BGLex/zasady-wspolpracy' },
    { name: 'Blog', href: '/BGLex/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${
        isScrolled || !isTransparent ? 'bg-brand-dark shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="/BGLex/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative group text-white uppercase text-[10px] lg:text-xs tracking-widest font-light py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="/BGLex/#kontakt" 
            className="border border-brand-gold text-brand-gold px-6 py-2 uppercase text-[10px] tracking-[0.2em] hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 text-center"
          >
            Umów spotkanie
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-gold p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-brand-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white uppercase text-sm tracking-[0.2em] border-b border-brand-gold/10 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/BGLex/#kontakt" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-gold text-brand-dark text-center py-3 uppercase text-xs tracking-[0.2em] font-bold"
              >
                Umów spotkanie
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
