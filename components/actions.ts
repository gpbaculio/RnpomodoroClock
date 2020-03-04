import {
  SET_TIMER,
  ON_TIMER_START,
  ON_PLAY,
  SWITCH_SESSION,
  ON_PAUSE,
  SetTimerType,
  OnTimerStartType,
  OnPlayType,
  SwitchSessionType,
  OnPauseType,
  ON_SET_TIME,
  OnSetTimeType,
  OnResetType,
  ON_RESET,
} from './types';

export const setTimer: (startTimer: number) => SetTimerType = (
  startTimer: number,
) => ({
  type: SET_TIMER,
  payload: {
    startTimer,
  },
});

export const onTimerStart: () => OnTimerStartType = () => ({
  type: ON_TIMER_START,
});

export const onPlay: () => OnPlayType = () => ({
  type: ON_PLAY,
});

export const switchSession: (session: 'Break' | 'Work') => SwitchSessionType = (
  session: 'Break' | 'Work',
) => ({
  type: SWITCH_SESSION,
  payload: {
    session,
  },
});

export const onPause: () => OnPauseType = () => ({
  type: ON_PAUSE,
});

export const onSetTime: (
  time: 'breakTime' | 'workTime',
  key: 'minutes' | 'seconds',
  value: string,
) => OnSetTimeType = (
  time: 'breakTime' | 'workTime',
  key: 'minutes' | 'seconds',
  value: string,
) => ({
  type: ON_SET_TIME,
  payload: {time, key, value},
});

export const onReset: () => OnResetType = () => ({
  type: ON_RESET,
});
