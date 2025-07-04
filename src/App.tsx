// src/App.tsx
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import BackToTopButton from './components/BackToTopButton';
import AuthModal from './components/AuthModal'; // Твой компонент модального окна

const AppLayout: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const username = localStorage.getItem('username');

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Хедер с меню */}
      <header className="mb-6 flex justify-between items-center border-b pb-4">
        <h1 className="text-3xl font-bold">Галерея изображений</h1>
        <nav className="flex gap-6 items-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Главная
          </Link>
          <Link to="/favourites" className="text-blue-500 hover:underline">
            Избранное
          </Link>

          {username ? (
            <Link
              to="/profile"
              className="text-blue-500 hover:underline cursor-pointer transition-colors duration-200"
            >
              Привет, {username}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setShowAuthModal(true)} // 👈 Эта часть должна работать
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition-colors duration-200"
            >
              Войти / Регистрация
            </button>
          )}
        </nav>
      </header>

      {/* Основной контент */}
      <main>
        <Outlet />
      </main>

      <BackToTopButton />

      {/* Модальное окно */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
};

export default AppLayout;

// import React from 'react';
// import BackToTopButton from './components/BackToTopButton';
// import ImageGallery from './components/ImageGallery';
// import SearchBar from './components/SearchBar';
// import RegisterForm from './components/RegisterForm';

// const App: React.FC = () => {
//   const [searchQuery, setSearchQuery] = React.useState<string>('nature');
//   const username = localStorage.getItem('username');

//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     window.location.reload();
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Хедер с меню */}
//       <header className="mb-6 flex justify-between items-center border-b pb-4">
//         <h1 className="text-3xl font-bold">Галерея изображений</h1>
//         <nav className="flex gap-4 items-center">
//           <a href="/" className="text-blue-500 hover:underline">
//             Главная
//           </a>
//           <a href="/favourites" className="text-blue-500 hover:underline">
//             Избранное
//           </a>
//           {username ? (
//             <div className="flex items-center gap-2">
//               <span>Привет, {username}</span>
//               <button
//                 onClick={handleLogout}
//                 className="text-red-500 hover:underline text-sm"
//               >
//                 Выйти
//               </button>
//             </div>
//           ) : (
//             <a href="#register" className="text-blue-500 hover:underline">
//               Регистрация
//             </a>
//           )}
//         </nav>
//       </header>

//       {/* Форма регистрации */}
//       {!username && <RegisterForm />}

//       {/* Поиск и галерея */}
//       <SearchBar onSearch={setSearchQuery} />
//       <ImageGallery searchQuery={searchQuery} />
//       <BackToTopButton />
//     </div>
//   );
// };

// export default App;
