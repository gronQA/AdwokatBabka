import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center font-serif text-brand-gold">
      <div className="mb-2">
        <img 
          src="/BGLex/logo_bglex.png" 
          alt="BG LEX Logo" 
          className="h-16 md:h-20 w-auto object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <span 
          className="uppercase tracking-[0.2em] font-light text-center leading-tight" 
          style={{ 
            fontSize: '18px', 
            color: '#C99655'
          }}
        >
          BG LEX
        </span>
        <div className="flex items-center justify-center w-full gap-3 mt-1">
          <div className="h-[0.5px] w-8 bg-brand-gold/40"></div>
          <span 
            className="uppercase whitespace-nowrap tracking-[0.4em] font-medium" 
            style={{ 
              fontSize: '8px', 
              marginRight: '-4px', // Offset for tracking
              color: '#C99655'
            }}
          >
            Kancelaria Adwokacka
          </span>
          <div className="h-[0.5px] w-8 bg-brand-gold/40"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
