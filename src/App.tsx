import './App.css';

import Header from './components/Header';
import { mostPopularAPI } from './mocks/mostPopularAPI';

function App() {
  return (
    <>
      <Header />
      {/** Contents */}
      <div className="dark:bg-slate-950 h-full w-full bg-cover flex flex-wrap justify-center">
        {mostPopularAPI.items.map((item) => (
          <div key={item.id} className="dark:text-white p-2 max-w-xs">
            <img src={item.snippet.thumbnails.medium.url} />
            <div id="details" className="pt-2">
              <h3 className="overflow-hidden text-ellipsis font-semibold line-clamp-2">
                {item.snippet.title}
              </h3>
              <span className=" dark:text-gray-600">
                {item.snippet.channelTitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
