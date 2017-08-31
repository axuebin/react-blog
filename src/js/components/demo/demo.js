import React from 'react';
import DemoCard from './democard';
import '../../../css/demo/demo.css';

const democardList = [];
for (let i = 0; i < 12; i += 1) {
  democardList.push(<DemoCard key={i} url={`demo/demo${i}`} />);
}
export default class Blog extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="demo-container">
          {democardList}
        </div>
      </div>
    );
  }
}
