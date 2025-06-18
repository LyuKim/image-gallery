// src/components/FavouritesPage.tsx
import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import type { Image } from '../types';

const FavouritesPage: React.FC = () => {
  const [favourites, setFavourites] = useState<Image[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('likedImages');
    if (saved) {
      const likedIds = Object.keys(JSON.parse(saved));
      // Здесь можно сделать запрос к API для получения полных данных изображений,
      // но для простоты мы просто будем использовать ID и URL из localStorage
      // Для примера предположим, что у нас есть список всех изображений.
      // В реальном приложении это можно реализовать через Redux / Context API / БД
      // Для MVP просто покажем лайкнутые ID
      setFavourites(
        JSON.parse(localStorage.getItem('favouriteImages') || '[]')
      );
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Избранное</h1>
      {favourites.length === 0 ? (
        <p>Нет избранных изображений.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favourites.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
