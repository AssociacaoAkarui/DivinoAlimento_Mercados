import React from 'react';
import logoDivino from '@/assets/LOGO_DIVINO_ALIMENTOS.webp';

interface CoBrandAkaruiProps {
  className?: string;
}

export const CoBrandAkarui = ({ className }: CoBrandAkaruiProps) => {
  return (
    <div className={`text-center mt-0 sm:mt-2 lg:mt-4 mb-2 sm:mb-4 ${className}`}>
      <div className="flex justify-center">
        <a 
          href="https://github.com/AssociacaoAkarui/DivinoAlimento"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <img 
            src={logoDivino}
            fetchPriority="high"
            alt="Divino Alimento"
            className="w-[220px] h-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default CoBrandAkarui;