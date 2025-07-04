import React, { useState } from 'react';

const AuthModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{isLogin ? 'Вход' : 'Регистрация'}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
                        &times;
                    </button>
                </div>

                {/* Переключатель между формами */}
                <div className="mb-4 flex justify-center">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button
                            type="button"
                            onClick={() => setIsLogin(true)}
                            className={`px-4 py-2 text-sm font-medium ${isLogin
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-700 border border-gray-300'
                                } rounded-l-lg`}
                        >
                            Войти
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLogin(false)}
                            className={`px-4 py-2 text-sm font-medium ${!isLogin
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-700 border border-gray-300'
                                } rounded-r-lg`}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </div>

                {/* Форма входа */}
                {isLogin ? (
                    <LoginForm onClose={onClose} />
                ) : (
                    <RegisterForm onClose={onClose} />
                )}
            </div>
        </div>
    );
};

// Форма входа
const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [username, setUsername] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            localStorage.setItem('username', username);
            alert(`Добро пожаловать, ${username}!`);
            window.location.reload();
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Имя пользователя</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Введите имя"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Войти
            </button>
        </form>
    );
};

// Форма регистрации
const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [username, setUsername] = useState('');
  
    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      if (username.trim()) {
        localStorage.setItem('username', username);
        alert(`Вы зарегистрированы как ${username}`);
        // Добавь вызов onClose здесь!
        onClose(); // Закрываем модальное окно после успешной регистрации
      }
    };
  
    return (
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Придумайте имя</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите имя"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Зарегистрироваться
        </button>
      </form>
    );
};

export default AuthModal;
