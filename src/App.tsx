import { Outlet } from 'react-router-dom';

import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './components/Header';
import { mostPopularAPI } from './mocks/mostPopularAPI';
import { getTimeSincePublication } from './utils';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div id="contents">
        <Outlet />
      </div>
      <div className="dark:bg-slate-950 h-full w-full bg-cover flex flex-wrap justify-center">
        {mostPopularAPI.items.map((item) => (
          <div
            key={item.id}
            className="dark:text-white m-2 max-w-xs cursor-pointer mb-3"
          >
            <img src={item.snippet.thumbnails.medium.url} />
            <div id="details" className="pt-2">
              <h3 className="overflow-hidden text-ellipsis font-semibold line-clamp-2">
                {item.snippet.title}
              </h3>
              <div className="dark:text-gray-600">
                <span>{item.snippet.channelTitle}</span>
                <span> &#8226; </span>
                <span>{getTimeSincePublication(item.snippet.publishedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </QueryClientProvider>
  );
}

export default App;
