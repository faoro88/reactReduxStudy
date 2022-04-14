import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import App from './src/screens/App';

const AppWrapper = () => {
  return (
      <Provider store={store}>
        <App />
      </Provider>
  );
};

export default AppWrapper;
