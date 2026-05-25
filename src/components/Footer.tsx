import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <Logo />
            <p className="mt-6 text-gray-300 text-sm leading-relaxed font-light italic text-center lg:text-left max-w-md lg:max-w-none">
              Profesjonalna pomoc prawna oparta na zaufaniu i wieloletnim doświadczeniu. Zapraszamy do kontaktu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-brand-gold uppercase text-sm tracking-[0.2em] mb-6 font-bold">Na skróty</h4>
            <ul className="space-y-4">
              {[
                { name: 'O Kancelarii', href: '/BGLex/o-kancelarii' },
                { name: 'Specjalizacje', href: '/BGLex/#specjalizacje' },
                { name: 'Zasady współpracy', href: '/BGLex/zasady-wspolpracy' },
                { name: 'Blog', href: '/BGLex/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-brand-gold transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-brand-gold mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-brand-gold uppercase text-sm tracking-[0.2em] mb-6 font-bold text-center sm:text-left">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3 group">
                <Phone size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <a href="tel:+48507771073" className="hover:text-brand-gold transition-colors">+48 507 771 073</a>
              </li>
              <li className="flex items-start gap-3 group max-w-[280px] sm:max-w-none">
                <Mail size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <a href="mailto:adwokat.barbara.babka@gmail.com" className="hover:text-brand-gold transition-colors break-words">adwokat.barbara.babka@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="text-center sm:text-left">
                  <span>ul. Mikołaja Kopernika 12/7<br />40-064 Katowice</span>
                  <div className="mt-2 pt-2 border-t border-brand-gold/10 text-[10px] text-gray-400">
                    <p>NIP: 6511639806</p>
                    <p>REGON: 384043894</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Law */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-brand-gold uppercase text-sm tracking-[0.2em] mb-6 font-bold">Śledź nas</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
            <p className="text-[10px] text-gray-400 leading-tight text-center sm:text-left max-w-[200px] sm:max-w-none">
              Treści zamieszczone na niniejszej stronie mają charakter wyłącznie informacyjny i nie stanowią porady prawnej.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-gray-500">
            © {currentYear} BG LEX Kancelaria Adwokacka. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-[10px] text-gray-500 uppercase tracking-widest items-center">
            <a href="/BGLex/polityka-prywatnosci" className="hover:text-brand-gold transition-colors">Polityka prywatności</a>
            <a href="https://gronqa.pl" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-bold">Strona stworzona przez gronqa.pl</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
