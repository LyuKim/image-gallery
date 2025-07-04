// RegisterForm.tsx
import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username);
      alert(`Добро пожаловать, ${username}!`);
      window.location.reload(); // Обновляем страницу, чтобы обновилось меню
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-bold mb-2">Регистрация</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Введите ваше имя"
        className="w-full p-2 border rounded mb-2"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
