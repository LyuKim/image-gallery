import React, { useState } from 'react';
import type { Image } from '../types';

type ImageCardProps = {
    image: Image;
};

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    const [liked, setLiked] = useState<boolean>(
        JSON.parse(localStorage.getItem(`likedImages`) || '{}')[image.id] || false
    );

    const toggleLike = () => {
        const likes = JSON.parse(localStorage.getItem('likedImages') || '{}');
        likes[image.id] = !liked;
        localStorage.setItem('likedImages', JSON.stringify(likes));
        setLiked(!liked);
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
            >
                ❤️
            </button>
        </div>
    );
};

export default ImageCard;
