import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getTimeSincePublication } from '../utils';

interface Item {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
    title: string;
    channelTitle: string;
    publishedAt: string;
  };
}

interface SearchData {
  items: Item[];
}

const Videos = () => {
  const { searchId } = useParams();

  const fetchSearchData = async (): Promise<SearchData> => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchId}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`,
    ).then((res) => res.json());
    return response;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ['data', searchId],
    queryFn: () => fetchSearchData(),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occureed: ' + error.message;

  return (
    <>
      <div className="dark:bg-slate-950 h-full w-full bg-cover flex flex-wrap justify-center">
        {data?.items
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
