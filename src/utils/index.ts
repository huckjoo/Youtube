import { DAY, HOUR, MINUTE, MONTH, WEEK, YEAR } from '../constants';

export const getTimeSincePublication = (time: string): string => {
  const currentTime = new Date().getTime();
  const publishedTime = new Date(time).getTime();
  const passedTime = currentTime - publishedTime;

  const years = Math.floor(passedTime / YEAR);
  const months = Math.floor(passedTime / MONTH);
  const weeks = Math.floor(passedTime / WEEK);
  const days = Math.floor(passedTime / DAY);
  const hours = Math.floor((passedTime % DAY) / HOUR);
  const minutes = Math.floor((passedTime % HOUR) / MINUTE);

  if (years > 0) return `${years}년 전`;
  if (months > 0) return `${months}달 전`;
  if (weeks > 0) return `${weeks}주 전`;
  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  return `${minutes}분 전`;
};
