import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedDashboard } from './Dashboard';
import { store } from '../store';

export default function Main() {
  return (
    <Provider store={store}>
      <div>
        <ConnectedDashboard />
      </div>
    </Provider>
  );
}
