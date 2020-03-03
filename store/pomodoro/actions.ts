import {
  SET_TIMER,
  ON_TIMER_START,
  ON_PLAY,
  SWITCH_SESSION,
  ON_PAUSE,
} from './types';

export const setTimer = (startTimer: number) => ({
  type: SET_TIMER,
  payload: {
    startTimer,
  },
});

export const onTimerStart = () => ({
  type: ON_TIMER_START,
});

export const onPlay = () => ({
  type: ON_PLAY,
});

export const switchSession = (session: 'Break' | 'Work') => ({
  type: SWITCH_SESSION,
  payload: {
    session,
  },
});

export const onPause = () => ({
  type: ON_PAUSE,
});
