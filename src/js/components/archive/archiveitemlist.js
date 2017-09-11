import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ArchiveItemList extends React.Component {
  render() {
    const year = this.props.year;
    const titleList = this.props.items.map(item => <li key={item.number}>{item.updated_at.split('T')[0]}<Link key={item.number} to={`/blog/article/${item.number}`}>{item.title}</Link></li>);
    return (
      <div className="archive-itemlist">
        <h2>{year}</h2>
        <ul>
          {titleList}
        </ul>
      </div>
    );
  }
}

ArchiveItemList.defaultProps = {
  year: 'year',
  items: null,
};

ArchiveItemList.propTypes = {
  year: PropTypes.string,
  items: PropTypes.array,
};
