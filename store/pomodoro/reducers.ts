import {Animated} from 'react-native';

import {secondsToHms, getSeconds} from './utils';
import {
  ON_PLAY,
  ON_TIMER_START,
  SET_TIMER,
  PomodoroActionTypes,
  SWITCH_SESSION,
  PomodoroInitStateType,
  TimeType,
  ON_PAUSE,
} from './types';

const minutes = '00';
const seconds = '05';
const totalSeconds = getSeconds(minutes, seconds);
const time = secondsToHms(totalSeconds);

const pomodoroInitState: PomodoroInitStateType = {
  work: {
    minutes,
    seconds,
  },
  break: {
    minutes,
    seconds,
  },
  session: 'Work',
  timeRemaining: 0, // seconds
  start: false,
  time,
  startTimer: 0,
  pause: false,
  totalSeconds,
  percent: new Animated.Value(0),
};

export const pomodoroReducer = (
  state = pomodoroInitState,
  action: PomodoroActionTypes,
) => {
  switch (action.type) {
    case ON_PAUSE:
      return {
        ...state,
        pause: true,
        start: false,
        startTimer: null,
      };
    case ON_PLAY:
      return {
        ...state,
        start: true,
        pause: false,
      };
    case ON_TIMER_START:
      return {
        ...state,
        pause: false,
        time: secondsToHms(state.totalSeconds - 1),
        totalSeconds: state.totalSeconds - 1,
      };
    case SET_TIMER:
      return {
        ...state,
        startTimer: action.payload.startTimer,
      };
    case SWITCH_SESSION:
      const {session} = action.payload;
      const {minutes: sessionMinutes, seconds: sessionSeconds} = state[
        (session as typeof session).toLowerCase()
      ] as TimeType;
      const sessionTotalSeconds = getSeconds(sessionMinutes, sessionSeconds);
      return {
        ...state,
        startTimer: null,
        session,
        start: false,
        percent: new Animated.Value(0),
        time: secondsToHms(sessionTotalSeconds),
        totalSeconds,
      };
    default:
      return state;
  }
};

export default pomodoroReducer;
