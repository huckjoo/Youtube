import { DAY, HOUR, MINUTE } from '../constants';

export const getTimeSincePublication = (time: string): string => {
  const currentTime = new Date().getTime();
  const publishedTime = new Date(time).getTime();
  const passedTime = currentTime - publishedTime;

  const days = Math.floor(passedTime / DAY);
  const hours = Math.floor((passedTime % DAY) / HOUR);
  const minutes = Math.floor((passedTime % HOUR) / MINUTE);

  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  return `${minutes}분 전`;
};
