import React from 'react';
import HomeCard from './homecard';
import '../../../css/homecard.css';

export default class HomeCardArea extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: null,
    };
  }

  componentWillMount() {
    fetch('./src/js/data/homecard.json').then(response => response.json()).then((data) => {
      const taskList = data.map(item => <HomeCard key={item.cardId} cardId={item.cardId} cardUrl={item.cardUrl} cardName={item.cardName} cardContent={item.cardContent} />);
      this.setState({ taskList });
    }).catch(e => console.log(e));
  }

  render() {
    return (
      <div className="home-card-area">
        {this.state.taskList}
      </div>
    );
  }
}
