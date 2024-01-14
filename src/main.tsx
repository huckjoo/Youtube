import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HotVideos from './components/hotVideos.tsx';
import Videos from './components/Videos.tsx';
import VideoDetailPage from './page/VideoDetailPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/' || '/*', element: <HotVideos /> },
      {
        path: 'videos/:searchKeyword',
        element: <Videos />,
      },
      {
        path: 'videos/watch/:videoId',
        element: <VideoDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
