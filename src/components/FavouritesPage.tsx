// src/components/FavouritesPage.tsx
import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import type { Image } from '../types';

const FavouritesPage: React.FC = () => {
  const [favourites, setFavourites] = useState<Image[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favouriteImages');
    if (saved) {
      setFavourites(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Избранное</h1>
      {favourites.length === 0 ? (
        <p>У вас пока нет избранных изображений.</p>
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
