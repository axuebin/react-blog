import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ArticleListItem extends React.Component {
  render() {
    const tag = this.props.tag;
    const titleList = this.props.items.map(item => <li key={item.number}>{item.updated_at.split('T')[0]}<Link key={item.number} to={`/blog/article/${item.number}`}>{item.title}</Link></li>);
    return (
      <div className="archive-itemlist">
        <h2>{tag}</h2>
        <ul>
          {titleList}
        </ul>
      </div>
    );
  }
}

ArticleListItem.defaultProps = {
  tag: 'tag',
  items: null,
};

ArticleListItem.propTypes = {
  tag: PropTypes.string,
  items: PropTypes.array,
};
