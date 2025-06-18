import React, { useState, useEffect } from 'react';
import type { Image } from '../types';

type ImageCardProps = {
    image: Image;
};

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    // Инициализируем состояние из localStorage
    const getInitialLikeState = (): boolean => {
        const saved = localStorage.getItem('likedImages');
        if (!saved) return false;
        const likes = JSON.parse(saved);
        return !!likes[image.id];
    };

    const [liked, setLiked] = useState<boolean>(getInitialLikeState);

    // Синхронизируем состояние с localStorage
    useEffect(() => {
        const likes = JSON.parse(localStorage.getItem('likedImages') || '{}');
        likes[image.id] = liked;
        localStorage.setItem('likedImages', JSON.stringify(likes));
    }, [liked, image.id]);

    const toggleLike = () => {
        setLiked((prev) => !prev);
    };

    return (
        <div className="relative group">
            <img
                src={image.urls.small}
                alt={image.alt_description || 'Фотография'}
                className="w-full h-auto rounded-md transition-transform duration-300 transform group-hover:scale-105"
            />
            <button
                onClick={toggleLike}
                className={`absolute top-2 right-2 text-xl ${liked ? 'text-red-500' : 'text-white'} bg-black bg-opacity-50 rounded-full p-1`}
                type="button"
                aria-label={liked ? 'Unlike' : 'Like'}
            >
                ❤️
            </button>
        </div>
    );
};

export default ImageCard;
