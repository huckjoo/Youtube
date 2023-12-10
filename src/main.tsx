import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Watch from './Watch.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'watch/:videoId',
    element: <Watch />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
