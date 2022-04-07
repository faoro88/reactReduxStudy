import {combineReducers, createStore} from 'redux';
import {valueReducer} from '../reducers/valueReducer';

const rootReducer = combineReducers({
  value: valueReducer
});

export const store = createStore(rootReducer);
