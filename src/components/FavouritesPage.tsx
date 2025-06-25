import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';
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
      <header className="mb-6 flex items-center">
        <Link
          to="/"
          className="mr-4 text-blue-500 hover:underline flex items-center"
        >
          ← Назад
        </Link>
        <h1 className="text-3xl font-bold">Избранное</h1>
      </header>

      {favourites.length === 0 ? (
        <p>У вас пока нет избранных изображений.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favourites.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}

      <BackToTopButton />
    </div>
  );
};

export default FavouritesPage;
