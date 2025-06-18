import React, { useEffect } from 'react';

type LightboxProps = {
  imageUrl: string | null;
  alt: string;
  onClose: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, alt, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="max-w-full max-h-screen object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
