import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-6 text-gray-300 text-sm leading-relaxed font-light italic">
              Profesjonalna pomoc prawna oparta na zaufaniu i wieloletnim doświadczeniu. Zapraszamy do kontaktu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold uppercase text-sm tracking-[0.2em] mb-6 font-bold">Na skróty</h4>
            <ul className="space-y-4">
              {[
                { name: 'O Kancelarii', href: '/AdwokatBabka/o-kancelarii' },
                { name: 'Specjalizacje', href: '/AdwokatBabka/#specjalizacje' },
                { name: 'Zasady współpracy', href: '/AdwokatBabka/zasady-wspolpracy' },
                { name: 'Blog', href: '/AdwokatBabka/blog' }
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
          <div>
            <h4 className="text-brand-gold uppercase text-sm tracking-[0.2em] mb-6 font-bold">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3 group">
                <Phone size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <a href="tel:+48123456789" className="hover:text-brand-gold transition-colors">+48 123 456 789</a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <a href="mailto:kancelaria@adwokat-babka.pl" className="hover:text-brand-gold transition-colors">kancelaria@adwokat-babka.pl</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span>ul. Przykładowa 12/3<br />00-001 Warszawa</span>
              </li>
            </ul>
          </div>

          {/* Social & Law */}
          <div>
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
            <p className="text-[10px] text-gray-400 leading-tight">
              Treści zamieszczone na niniejszej stronie mają charakter wyłącznie informacyjny i nie stanowią porady prawnej.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-gold/10 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Kancelaria Adwokacka Barbara Babka. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 uppercase tracking-widest">
            <a href="/AdwokatBabka/polityka-prywatnosci" className="hover:text-brand-gold transition-colors">Polityka prywatności</a>
            <a href="https://gronqa.pl" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-bold">Strona stworzona przez gronqa.pl</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
