import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryCard from './categorycard';
import TagCard from './tagcard';

const ArchiveCard = () => (
  <div className="blog-rightsider-archive">
    <Link to="/blog/archive">所有文章</Link>
  </div>
);

export default class RightSider extends React.Component {
  render() {
    return (
      <div className="rightsider">
        <ArchiveCard />
        <CategoryCard issues={this.props.issues} />
        <TagCard issues={this.props.issues} />
      </div>
    );
  }
}

RightSider.defaultProps = {
  issues: [],
};

RightSider.propTypes = {
  issues: PropTypes.array,
};
