import {createStore, combineReducers} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import pomodoro from './pomodoro/reducers';

const rootReducer = combineReducers({
  pomodoro,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
