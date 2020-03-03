import {Animated} from 'react-native';

export const ON_PLAY = 'ON_PLAY';
export const ON_PAUSE = 'ON_PAUSE';
export const ON_TIMER_START = 'ON_TIMER_START';
export const SET_TIMER = 'SET_TIMER';
export const SWITCH_SESSION = 'SWITCH_SESSION';

export interface TimeType {
  minutes: string;
  seconds: string;
}

export interface PomodoroInitStateType {
  [key: string]: string | number | Animated.Value | boolean | TimeType;
  work: TimeType;
  break: TimeType;
  session: 'Work';
  timeRemaining: 0; // seconds
  start: boolean;
  time: string;
  startTimer: 0;
  pause: boolean;
  totalSeconds: number;
  percent: Animated.Value;
}

export interface SetTimerType {
  type: typeof SET_TIMER;
  payload: {
    startTimer: number;
  };
}

export interface OnPlayType {
  type: typeof ON_PLAY;
}

export interface OnTimerStartType {
  type: typeof ON_TIMER_START;
}

export interface SwitchSessionType {
  type: typeof SWITCH_SESSION;
  payload: {
    session: 'Break' | 'Work';
  };
}

export interface OnPauseType {
  type: typeof ON_PAUSE;
}

export type PomodoroActionTypes =
  | OnPauseType
  | SetTimerType
  | OnPlayType
  | OnTimerStartType
  | SwitchSessionType;
