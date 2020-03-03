import {StyleSheet, Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  minsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minsInput: {
    marginLeft: 5,
    borderColor: 'gray',
    borderWidth: 1,
    height: 20,
    width: 30,
  },
  secsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secsInput: {
    marginLeft: 5,
    borderColor: 'gray',
    borderWidth: 1,
    height: 20,
    width: 30,
  },
  controlsContainer: {
    width: width * 0.8,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  timeContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  controls: {
    flexDirection: 'row',
    width: width * 0.4,
    justifyContent: 'space-around',
  },
  progress: {
    backgroundColor: '#f9b8f9',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    zIndex: 0,
  },
  time: {
    zIndex: 1,
    color: '#841584',
  },
  progressContainer: {
    width: width / 2,
    height: width / 2,
    borderRadius: width / 2,
    borderWidth: 0.5,
    color: 'white',
    borderColor: '#841584',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
