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

    useEffect(() => {
        if (!searchQuery) return;

        const fetchImages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
                );
                setImages(response.data.results);
            } catch (error) {
                console.error('Ошибка загрузки изображений:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [searchQuery]);

    return (
        <div>
            {loading && <p className="text-center">Загрузка...</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
