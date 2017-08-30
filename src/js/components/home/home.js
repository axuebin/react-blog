import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomeHeader from './homeheader';
import HomeBanner from './homebanner';
import HomeCardArea from './homecardarea';
import HomeFooter from './homefooter';
import Blog from '../blog/blog';

const HomeContent = () => (
  <div>
    <HomeBanner />
    <HomeCardArea />
  </div>
);

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <HomeHeader />
          <Route exact path="/" component={HomeContent} />
          <Route path="/blog" component={Blog} />
          <HomeFooter />
        </div>
      </HashRouter>
    );
  }
}
