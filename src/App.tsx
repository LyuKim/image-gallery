import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('nature');

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Галерея изображений</h1>
      <SearchBar onSearch={setSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
    </div>
  );
}

export default App;
