import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Videos from './components/Videos.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'videos/:searchId',
        element: <Videos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
