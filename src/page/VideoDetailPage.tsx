import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';

const VideoDetailPage = () => {
  const { videoId } = useParams();
  const { state: channelId } = useLocation();

  // const fetchVideoData = async () => {
  //   const response = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${
  //       import.meta.env.VITE_YOUTUBE_API_KEY
  //     }`,
  //   ).then((res) => res.json());
  //   return response;
  // };

  const fetchChannelsData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`,
    ).then((res) => res.json());
    return response;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ['data', videoId],
    queryFn: () => fetchChannelsData(),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occureed: ' + error.message;

  console.log('data', data);

  return (
    <div className="dark:bg-slate-950 h-full w-full bg-cover flex flex-wrap justify-center">
      <div id="video" className="flex-[2_1_0] shrink-0 dark:bg-slate-200">
        비디오 들어갈 자리
      </div>
      <div className="flex-1 shrink-0 dark:bg-slate-500">
        비디오 리스트 들어갈 자리
      </div>
    </div>
  );
};

export default VideoDetailPage;
