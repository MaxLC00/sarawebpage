import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import VO from './pages/VO';
import Acting from './pages/Acting';
import Gallery from './pages/Gallery';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/vo',
        element: <VO />
      }, {
        path: '/acting',
        element: <Acting />
      }, {
        path: '/gallery',
        element: <Gallery />
      }, {
        path: '/bio',
        element: <Bio />
      }, {
        path: '/contact',
        element: <Contact />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
