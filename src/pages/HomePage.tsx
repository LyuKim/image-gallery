// src/pages/HomePage.tsx
import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('nature');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Галерея изображений</h2>
      <SearchBar onSearch={setSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
