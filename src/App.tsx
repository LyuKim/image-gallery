import { useState } from 'react';
import BackToTopButton from './components/BackToTopButton';
import ImageGallery from './components/ImageGallery';
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('nature');

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Галерея изображений</h1>
        <nav>
          <a href="/favourites" className="text-blue-500 hover:underline">
            Избранное
          </a>
        </nav>
      </header>
      <SearchBar onSearch={setSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
      <BackToTopButton />
    </div>
  );
}

export default App;
