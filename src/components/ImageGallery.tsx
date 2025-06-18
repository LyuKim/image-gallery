// src/components/ImageGallery.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import type { Image } from '../types';

type ImageGalleryProps = {
  searchQuery: string;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ searchQuery }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setPage(1);
    setImages([]);
    setHasMore(true);
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery || page === 1) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${page}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
        );
        if (response.data.results.length === 0) setHasMore(false);
        setImages((prev) => [...prev, ...response.data.results]);
      } catch (error) {
        console.error('Ошибка:', error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  // Первичная загрузка
  useEffect(() => {
    const fetchInitial = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchQuery}&page=1&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
        );
        setImages(response.data.results);
        if (response.data.results.length === 0) setHasMore(false);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery && page === 1) {
      fetchInitial();
    }
  }, [searchQuery]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((p) => p + 1);
    }
  };

  return (
    <div>
      {loading && page === 1 && <p className="text-center">Загрузка...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>

      {loading && page > 1 && <p className="text-center mt-4">Загрузка ещё...</p>}
      {!loading && hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
