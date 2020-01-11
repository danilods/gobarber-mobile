import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import './config/RectotronConfig';

import {store, persistor} from './store';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgrounColor="#7159c1" />
      </PersistGate>
      <App />
    </Provider>
  );
}
