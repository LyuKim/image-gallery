import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './App'; // Это наш layout с меню
import FavouritesPage from './components/FavouritesPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage'; // Новая главная

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />, // Главная страница
      },
      {
        path: '/favourites',
        element: <FavouritesPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;

// import { createBrowserRouter } from 'react-router-dom';
// import App from './App';
// import FavouritesPage from './components/FavouritesPage';
// import ProfilePage from './pages/ProfilePage';
// import RegisterPage from './pages/RegisterPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/favourites',
//     element: <FavouritesPage />,
//   },
//   {
//     path: '/profile',
//     element: <ProfilePage />,
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />,
//   },
// ]);

// export default router;
