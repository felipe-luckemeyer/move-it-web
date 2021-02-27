// interface FormatTimeProps {
//   time: string;
// }

export const formatTime = (time) => {
  return String(time).padStart(2, '0').split('');
};
