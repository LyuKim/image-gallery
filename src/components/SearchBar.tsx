import React from 'react';

type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('query') as string;
        if (query.trim()) onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <input
                name="query"
                type="text"
                placeholder="Введите ключевое слово..."
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
        </form>
    );
};

export default SearchBar;
