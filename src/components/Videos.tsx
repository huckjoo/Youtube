import { useParams } from 'react-router-dom';

import { searchAPI } from '../mocks/searchAPI';
import { getTimeSincePublication } from '../utils';

const Videos = () => {
  const { searchId } = useParams();

  return (
    <>
      <div className="dark:bg-slate-950 h-full w-full bg-cover flex flex-wrap justify-center">
        {searchAPI.items
          .filter((x) => x.id.kind === 'youtube#video')
          .map((item) => (
            <div
              key={item.id.videoId}
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
                  <span>
                    {getTimeSincePublication(item.snippet.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Videos;
