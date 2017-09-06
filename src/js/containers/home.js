import React from 'react';
import HomeBanner from '../components/home/homebanner';
import HomeCardArea from '../components/home/homecardarea';

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
