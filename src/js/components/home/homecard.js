import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class HomeCard extends React.Component {
  render() {
    const contentList = this.props.cardContent.map(item => <li key={item.id}><a target="_blank" rel="noopener noreferrer" href={item.url}>{item.title}</a></li>);
    return (
      <div className="home-card">
        <div className="home-card-name">
          <Link to={this.props.cardUrl}>{this.props.cardName}</Link>
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
  cardName: 'Card Name',
  cardUrl: 'Card Url',
  cardContent: [],
};

HomeCard.propTypes = {
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
  cardContent: PropTypes.array,
};
