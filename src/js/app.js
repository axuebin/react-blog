import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import '../css/index.css';
import HomeHeader from './components/home/homeheader';
import HomeFooter from './components/home/homefooter';
import Home from './containers/home';
import Blog from './containers/blog';
import Demo from './containers/demo';
import About from './containers/about';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <HomeHeader />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/demo" component={Demo} />
          <Route path="/about" component={About} />
          <HomeFooter />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('example'));
