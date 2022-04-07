import React from 'react';
import {Provider, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {setValue} from './src/redux/actions/valueAction';
import {store} from './src/redux/store/store';
import App from './src/screens/App';

const AppWrapper = () => {
  return (
    <Provider store={store}> 
      <App/> 
    </Provider>
  )
}

export default AppWrapper;
