import React from 'react';
import {
  Text,
  View,
  Animated,
  KeyboardAvoidingView,
  Button,
  TextInput,
} from 'react-native';
import {styles, width} from './constants';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {
  onTimerStart,
  setTimer,
  onPlay,
  switchSession,
  onPause,
} from '../store/pomodoro/actions';

const Pomodoro = () => {
  const dispatch = useDispatch();
  const {
    percent,
    totalSeconds,
    pause,
    start,
    startTimer,
    time,
    session,
  } = useSelector(({pomodoro}: RootState) => pomodoro);

  const renderBtnTitle = () => {
    if (pause) {
      return 'Resume';
    } else if (!start && !pause) {
      return 'Start';
    } else {
      return 'Pause';
    }
  };

  const animation = Animated.timing(percent, {
    toValue: width / 2,
    duration: totalSeconds * 1000,
  });

  React.useEffect(() => {
    if (start) {
      if (startTimer) {
        return;
      }
      animation.start();
      const timer = setInterval(() => {
        dispatch(onTimerStart());
      }, 1000);
      dispatch(setTimer(timer));
    }
  }, [dispatch, percent, start, startTimer, totalSeconds, session, animation]);

  React.useEffect(() => {
    if (pause) {
      (percent as Animated.Value).stopAnimation(val => {
        (percent as Animated.Value).setValue(val);
      });
      clearInterval(startTimer);
    }
  }, [percent, pause, startTimer]);

  React.useEffect(() => {
    if (totalSeconds === 0 && startTimer) {
      clearInterval(startTimer);
      dispatch(switchSession(session === 'Break' ? 'Work' : 'Break'));
      dispatch(onPlay());
    }
  }, [totalSeconds, startTimer, session, dispatch]);

  const handlePlay = () => {
    if (pause) {
      dispatch(onPlay());
    } else if (!start && !pause) {
      dispatch(onPlay());
    } else {
      clearInterval(startTimer);
      dispatch(onPause());
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.progressContainer}>
        <Text style={styles.time}>{time}</Text>
        <Animated.View style={[styles.progress, {height: percent}]} />
        <Text style={styles.time}>{`${session} Timer`}</Text>
      </View>
      <View style={styles.controlsContainer}>
        <View style={styles.controls}>
          <Button
            title={renderBtnTitle()}
            onPress={handlePlay}
            color="#841584"
          />
          <Button
            title="Reset"
            onPress={() => console.log('asd')}
            color="#841584"
          />
        </View>
        <View style={styles.timeContainer}>
          <Text>Work Time</Text>
          <View style={styles.minsContainer}>
            <Text>Mins:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.minsInput}
              onChangeText={() => console.log('asd')}
              value={'asd'}
            />
          </View>
          <View style={styles.secsContainer}>
            <Text>Secs:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.secsInput}
              onChangeText={() => console.log('asd')}
              value={'asd'}
            />
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text>Break Time</Text>
          <View style={styles.minsContainer}>
            <Text>Mins:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.minsInput}
              onChangeText={() => console.log('asd')}
              value={'asd'}
            />
          </View>
          <View style={styles.secsContainer}>
            <Text>Secs:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.secsInput}
              onChangeText={() => console.log('asd')}
              value={'asd'}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Pomodoro;
