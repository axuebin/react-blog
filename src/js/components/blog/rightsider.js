import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryCard from './categorycard';
import LabelCard from './labelcard';
import '../../../css/blog/rightsider.css';

const ArchiveCard = () => (
  <div className="blog-rightsider-archive">
    <Link to="/blog/archive">所有文章</Link>
  </div>
);

export default class RightSider extends React.Component {
  render() {
    return (
      <div className="blog-rightsider">
        <ArchiveCard />
        <CategoryCard issues={this.props.issues} />
        <LabelCard issues={this.props.issues} />
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
