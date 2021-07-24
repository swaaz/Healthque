import React from 'react';
import Navigator from './routes/MainStack';
import { Provider } from 'react-redux';
import {store} from './state/store'
export default function App() {
  return (
    <Provider store={store} >
      <Navigator />
    </Provider>
  );
}
