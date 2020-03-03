import {Vibration} from 'react-native';

export const getSeconds = (mins: string, seconds: string) =>
  Number(mins) * 60 + Number(seconds);

export const secondsToHms = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hFormat = h >= 0 && h < 10 ? `0${h}` : `${h}`;
  const mFormat = m >= 0 && m < 10 ? `0${m}` : `${m}`;
  const sFormat = s >= 0 && s < 10 ? `0${s}` : `${s}`;

  return `${hFormat}:${mFormat}:${sFormat}`;
};

export const vibrate = () => Vibration.vibrate([500, 500, 500]);
