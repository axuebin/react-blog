import React from 'react';
import HomeBanner from './homebanner';
import HomeCardArea from './homecardarea';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeBanner />
        <HomeCardArea />
      </div>
    );
  }
}
