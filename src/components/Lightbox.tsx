import React, { useEffect } from 'react';

type LightboxProps = {
  imageUrl: string;
  alt: string;
  onClose: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, alt, onClose }) => {
  // Закрытие по Esc
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadeIn"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] object-contain transition-transform transform hover:scale-105 duration-300"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;


