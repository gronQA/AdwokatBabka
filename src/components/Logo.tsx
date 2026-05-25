import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center font-serif text-brand-gold">
      <div className="mb-1">
        <img 
          src="/AdwokatBabka/logo.png" 
          alt="Logo Kancelaria" 
          className="h-16 w-auto object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span 
        className="uppercase text-center mb-[6px]" 
        style={{ 
          fontSize: '24px', 
          fontWeight: '200', 
          letterSpacing: '2px', 
          lineHeight: '1.1',
          color: '#C99655' // Keeping brand-gold as it matches closely
        }}
      >
        Barbara Babka
      </span>
      <div className="flex items-center justify-center w-full gap-2 mt-1">
        <div 
          className="brand-line" 
          style={{ 
            flexGrow: 1, 
            maxWidth: '35px', 
            height: '1px', 
            backgroundColor: '#C99655', 
            opacity: 0.8 
          }}
        ></div>
        <span 
          className="uppercase whitespace-nowrap" 
          style={{ 
            fontSize: '11px', 
            fontWeight: '400', 
            letterSpacing: '6px', 
            lineHeight: '1.0',
            marginRight: '-6px',
            color: '#C99655'
          }}
        >
          ADWOKAT
        </span>
        <div 
          className="brand-line" 
          style={{ 
            flexGrow: 1, 
            maxWidth: '35px', 
            height: '1px', 
            backgroundColor: '#C99655', 
            opacity: 0.8 
          }}
        ></div>
      </div>
    </div>
  );
};

export default Logo;
