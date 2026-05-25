import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gavel, Users, ShieldCheck, Scale, ChevronDown, ChevronUp } from 'lucide-react';

const practiceAreas = [
  {
    id: 'cywilne',
    title: 'Prawo Cywilne',
    icon: Gavel,
    description: 'Kompleksowa pomoc w sprawach o odszkodowania, spadki oraz bieżące sprawy cywilne.',
    sections: [
      {
        subtitle: 'Sprawy o odszkodowanie, rentę i zadośćuczynienie',
        items: ['Wypadki przy pracy', 'Szkody górnicze', 'Błędy lekarskie', 'Wypadki komunikacyjne']
      },
      {
        subtitle: 'Sprawy spadkowe',
        items: ['Stwierdzenie nabycia spadku', 'Przyjęcie bądź odrzucenie spadku', 'Dochodzenie zachowku']
      },
      {
        subtitle: 'Oddłużanie i upadłość',
        items: ['Rozwiązywanie sporów z bankami i pożyczkodawcami', 'Nieważność umów (ustalenie stosunku prawnego)', 'Wnioski o upadłość konsumencką']
      },
      {
        subtitle: 'Pozostałe sprawy cywilne',
        items: ['Gwarancja i rękojmia za wady', 'Ustanawianie służebności (w tym przesyłu)', 'Zasiedzenie i prawo rzeczowe']
      }
    ]
  },
  {
    id: 'rodzinne',
    title: 'Prawo Rodzinne',
    icon: Users,
    description: 'Delikatne podejście do spraw małżeńskich, opiekuńczych oraz dotyczących małoletnich.',
    sections: [
      {
        subtitle: 'Sprawy małżeńskie',
        items: ['Rozwód (z orzekaniem o winie lub bez)', 'Separacja małżonków', 'Podział majątku wspólnego']
      },
      {
        subtitle: 'Sprawy dotyczące małoletnich',
        items: ['Alimenty (podwyższenie, obniżenie)', 'Regulowanie kontaktów z dziećmi', 'Ustalenie lub zaprzeczenie ojcostwa', 'Sprawy o demoralizację']
      },
      {
        subtitle: 'Pozostałe sprawy rodzinne',
        items: ['Ubezwłasnowolnienie', 'Umieszczenie w specjalistycznej jednostce medycznej']
      }
    ]
  },
  {
    id: 'karne',
    title: 'Prawo Karne',
    icon: ShieldCheck,
    description: 'Skuteczna obrona i reprezentacja na każdym etapie postępowania karnego i wykonawczego.',
    sections: [
      {
        subtitle: 'Obrona Klientów',
        items: ['Udział w przesłuchaniach (świadek/podejrzany)', 'Wsparcie przy zatrzymaniu i aresztowaniu', 'Reprezentacja przed sądem i w postępowaniu przygotowawczym', 'Sporządzanie pism i zażaleń']
      },
      {
        subtitle: 'Postępowanie wykonawcze',
        items: ['Wyrok łączny', 'Odroczenie lub przerwa w karze', 'Warunkowe przedterminowe zwolnienie', 'Dozór elektroniczny (bransoleta)']
      },
      {
        subtitle: 'Reprezentowanie pokrzywdzonych',
        items: ['Zawiadomienie o popełnieniu przestępstwa', 'Prywatny akt oskarżenia', 'Reprezentacja w toku całego postępowania']
      }
    ]
  },
  {
    id: 'gospodarcze',
    title: 'Prawo Gospodarcze',
    icon: Scale,
    description: 'Profesjonalna obsługa prawna przedsiębiorców, spółek oraz windykacja należności.',
    sections: [
      {
        subtitle: 'Obsługa firm i spółek',
        items: ['Zakładanie, tworzenie i likwidacja spółek', 'Przygotowywanie umów i dokumentów wewnętrznych', 'Weryfikacja i negocjowanie kontraktów', 'Regulaminy współpracy']
      },
      {
        subtitle: 'Dochodzenie roszczeń',
        items: ['Windykacja należności', 'Reprezentacja w sporach sądowych gospodarczych']
      }
    ]
  }
];

const PracticeAreas = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {practiceAreas.map((area) => (
        <div 
          key={area.id}
          className={`bg-white border border-gray-100 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl ${
            expandedId === area.id ? 'ring-1 ring-brand-gold md:col-span-2' : ''
          }`}
        >
          <div className="p-10">
            <div className="flex items-start justify-between mb-6">
              <area.icon className="text-brand-gold" size={48} />
              <button 
                onClick={() => toggleExpand(area.id)}
                className="text-brand-gold hover:text-brand-dark transition-colors"
              >
                {expandedId === area.id ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
              </button>
            </div>
            
            <h4 className="text-2xl font-serif mb-4 text-brand-dark">{area.title}</h4>
            <p className="text-gray-600 font-light text-base mb-8 leading-relaxed max-w-xl">
              {area.description}
            </p>

            <AnimatePresence>
              {expandedId === area.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
                    {area.sections.map((section, idx) => (
                      <div key={idx}>
                        <h5 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">
                          {section.subtitle}
                        </h5>
                        <ul className="space-y-3">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-snug">
                              <span className="w-1.5 h-1.5 bg-brand-gold/40 rounded-full mt-1.5 shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={() => toggleExpand(area.id)}
              className="mt-8 text-brand-dark text-xs uppercase tracking-widest font-bold flex items-center hover:text-brand-gold transition-colors group"
            >
              {expandedId === area.id ? 'Zwiń szczegóły' : 'Zobacz więcej'} 
              <span className={`ml-2 transition-transform duration-300 ${expandedId === area.id ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
                <ChevronDown size={14} />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeAreas;
