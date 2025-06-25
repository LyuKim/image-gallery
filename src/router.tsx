import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FavouritesPage from './components/FavouritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/favourites',
    element: <FavouritesPage />,
  },
]);

export default router;
