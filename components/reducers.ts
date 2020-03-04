import {Animated} from 'react-native';

import {secondsToHms, getSeconds} from './utils';
import {
  ON_PLAY,
  ON_TIMER_START,
  SET_TIMER,
  SWITCH_SESSION,
  PomodoroInitStateType,
  ON_PAUSE,
  PomodoroActionTypes,
  ON_SET_TIME,
  ON_RESET,
} from './types';

const minutes = '00';
const seconds = '05';
const totalSeconds = getSeconds(minutes, seconds);
const time = secondsToHms(totalSeconds);

export const pomodoroInitState: PomodoroInitStateType = {
  workTime: {
    minutes,
    seconds,
  },
  breakTime: {
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
  state: PomodoroInitStateType,
  action: PomodoroActionTypes,
) => {
  switch (action.type) {
    case ON_PAUSE:
      return {
        ...state,
        pause: true,
        start: false,
        startTimer: 0,
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
    case SET_TIMER: {
      return {
        ...state,
        startTimer: action.payload!.startTimer,
      };
    }
    case SWITCH_SESSION: {
      const session = action.payload!.session;
      const {minutes: sessionMinutes, seconds: sessionSeconds} =
        session === 'Break' ? state.breakTime : state.workTime;
      const sessionTotalSeconds = getSeconds(sessionMinutes, sessionSeconds);
      return {
        ...state,
        startTimer: 0,
        session,
        start: false,
        percent: new Animated.Value(0),
        time: secondsToHms(sessionTotalSeconds),
        totalSeconds: sessionTotalSeconds,
      };
    }
    case ON_SET_TIME: {
      const {time: timeKey, key, value} = action.payload;
      const sessionTime = {
        ...state[timeKey],
        [key]: value,
      };
      const sessionTotalSeconds = getSeconds(
        sessionTime.minutes,
        sessionTime.seconds,
      );
      return {
        ...state,
        [timeKey]: sessionTime,
        startTimer: 0,
        start: false,
        pause: false,
        percent: new Animated.Value(0),
        ...(timeKey.includes(state.session.toLowerCase()) && {
          time: secondsToHms(sessionTotalSeconds),
          totalSeconds: sessionTotalSeconds,
        }),
      };
    }
    case ON_RESET: {
      const newTotalSeconds = getSeconds(minutes, seconds);
      return {
        ...state,
        ...pomodoroInitState,
        startTimer: 0,
        session: 'Work',
        start: false,
        percent: new Animated.Value(0),
        time: secondsToHms(newTotalSeconds),
        totalSeconds: newTotalSeconds,
      };
    }
    default:
      return state;
  }
};

export default pomodoroReducer;
