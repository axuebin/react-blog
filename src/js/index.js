import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../css/index.css';
import configureStore from './store/configureStore';
import App from './containers/app';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('example'));
