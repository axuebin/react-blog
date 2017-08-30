import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import Home from './components/home/home';

export default class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('example'));
