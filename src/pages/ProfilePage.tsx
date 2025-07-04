import React from 'react';

const ProfilePage: React.FC = () => {
  const username = localStorage.getItem('username');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Профиль</h2>
      {username ? (
        <div>
          <p>Добро пожаловать, {username}!</p>
          <button
            onClick={() => {
              localStorage.removeItem('username');
              window.location.reload();
            }}
            className="mt-2 text-red-500 hover:underline"
          >
            Выйти
          </button>
        </div>
      ) : (
        <p>Вы не авторизованы</p>
      )}
    </div>
  );
};

export default ProfilePage;
