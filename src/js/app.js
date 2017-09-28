import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import '../css/index.css';
import '../css/layout/layout.css';
import Index from './containers/index';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, document.getElementById('example'));
