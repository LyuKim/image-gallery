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
      const favourites = JSON.parse(saved);
      const isLiked = favourites.some((fav: Image) => fav.id === image.id);
      setLiked(isLiked);
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
        className={`absolute top-2 right-2 text-xl ${liked ? 'text-red-500' : 'text-white'} bg-black bg-opacity-50 rounded-full p-1`}
        type="button"
        aria-label={liked ? 'Unlike' : 'Like'}
      >
        ❤️
      </button>
  
      {/* Отдельная кнопка удаления */}
      {liked && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(); // повторный клик удаляет
          }}
          className="absolute bottom-2 right-2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-80 hover:opacity-100"
        >
          Удалить
        </button>
      )}
  
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
