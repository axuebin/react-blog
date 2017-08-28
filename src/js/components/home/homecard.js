import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class HomeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      cardContent: 'Item',
    };
  }
  render() {
    const contentList = this.props.cardContent.map(item => <li><Link to={item.url}>{item.title}</Link> </li>);
    return (
      <div className="home-card">
        <div className="home-card-name">
          <Link key={this.props.cardId} to={this.props.cardUrl}>{this.props.cardName}</Link>
        </div>
        <div className="home-card-content">
          <ul>
            {contentList}
          </ul>
        </div>
      </div>
    );
  }
}

HomeCard.defaultProps = {
  cardId: 'Card Id',
  cardName: 'Card Name',
  cardUrl: 'Card Url',
  cardContent: 'Card Content',
};

HomeCard.propTypes = {
  cardId: PropTypes.number,
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
  cardContent: PropTypes.string,
};
