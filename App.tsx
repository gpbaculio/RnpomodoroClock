/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';

declare var global: {HermesInternal: null | {}};

import Pomodoro from './components/Pomodoro';

export default () => (
  <Provider store={store}>
    <Pomodoro />
  </Provider>
);
