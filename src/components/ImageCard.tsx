import React, { useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import type { Image } from '../types';

type ImageCardProps = {
  image: Image;
};

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  // Инициализируем состояние из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('favouriteImages');
    if (saved) {
      try {
        const favourites = JSON.parse(saved);
        if (Array.isArray(favourites)) {
          const isLiked = favourites.some((fav: Image) => fav.id === image.id);
          setLiked(isLiked);
        }
      } catch (e) {
        console.error('Ошибка парсинга избранного:', e);
        localStorage.removeItem('favouriteImages');
      }
    }
  }, [image.id]);

  const toggleLike = () => {
    const saved = localStorage.getItem('favouriteImages');
    let favourites: Image[] = saved ? JSON.parse(saved) : [];

    if (liked) {
      // Удалить из избранного
      favourites = favourites.filter((fav: Image) => fav.id !== image.id);
    } else {
      // Добавить в избранное
      favourites.push(image);
    }

    localStorage.setItem('favouriteImages', JSON.stringify(favourites));
    setLiked(!liked);
  };

  return (
    <div className="relative group cursor-pointer">
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Фотография'}
        className="w-full h-auto rounded-md transition-transform duration-300 transform group-hover:scale-105"
        onClick={() => setLightboxOpen(true)}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleLike();
        }}
        className={`absolute top-2 right-2 text-xl ${
          liked ? 'text-red-500' : 'text-red-500/30'
        } bg-transparent hover:text-red-500/80 rounded-full p-1 transition-all duration-200 ease-in-out cursor-pointer`}
        type="button"
        aria-label={liked ? 'Unlike' : 'Like'}
      >
        <span className="inline-block">❤️</span>
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
