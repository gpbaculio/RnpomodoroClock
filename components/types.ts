import {Animated} from 'react-native';

export const ON_PLAY = 'ON_PLAY';
export const ON_PAUSE = 'ON_PAUSE';
export const ON_TIMER_START = 'ON_TIMER_START';
export const SET_TIMER = 'SET_TIMER';
export const SWITCH_SESSION = 'SWITCH_SESSION';
export const ON_SET_TIME = 'ON_SET_TIME';

export interface TimeType {
  minutes: string;
  seconds: string;
}

export interface PomodoroInitStateType {
  [key: string]:
    | string
    | number
    | Animated.Value
    | boolean
    | TimeType
    | 'Break'
    | 'Work';
  workTime: TimeType;
  breakTime: TimeType;
  session: 'Break' | 'Work';
  timeRemaining: number;
  start: boolean;
  time: string;
  startTimer: number;
  pause: boolean;
  totalSeconds: number;
  percent: Animated.Value;
}

export interface SetTimerType {
  type: typeof SET_TIMER;
  payload?: {
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
  payload?: {
    session: 'Break' | 'Work';
  };
}

export interface OnPauseType {
  type: typeof ON_PAUSE;
}

export interface OnSetTimeType {
  type: typeof ON_SET_TIME;
  payload: {
    time: 'breakTime' | 'workTime';
    key: 'minutes' | 'seconds';
    value: string;
  };
}

export type PomodoroActionTypes =
  | OnPauseType
  | SetTimerType
  | OnPlayType
  | OnTimerStartType
  | OnSetTimeType
  | SwitchSessionType;
