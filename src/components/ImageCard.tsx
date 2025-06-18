import React, { useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import type { Image } from '../types';

type ImageCardProps = {
  image: Image;
};

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  // Загружаем статус "лайка" из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('likedImages');
    if (saved) {
      const likes = JSON.parse(saved);
      setLiked(!!likes[image.id]);
    }
  }, [image.id]);

  // Сохраняем статус "лайка" в localStorage
  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('likedImages') || '{}');
    likes[image.id] = liked;
    localStorage.setItem('likedImages', JSON.stringify(likes));
  }, [liked, image.id]);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="relative group cursor-pointer">
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Фотография'}
        className="w-full h-auto rounded-md transition-transform duration-300 transform group-hover:scale-105"
        onClick={() => setLightboxOpen(true)} // Открытие лайтбокса
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleLike();
        }}
        className={`absolute top-2 right-2 text-xl ${liked ? 'text-red-500' : 'text-white'} bg-black bg-opacity-50 rounded-full p-1`}
        type="button"
        aria-label={liked ? 'Unlike' : 'Like'}
      >
        ❤️
      </button>

      {/* Рендерим только если lightboxOpen = true */}
      {lightboxOpen && (
        <Lightbox
          imageUrl={image.urls.regular}
          alt={image.alt_description || 'Фотография'}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ImageCard;
