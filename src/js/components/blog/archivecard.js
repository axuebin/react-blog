import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/blog/rightsider.css';

export default class ArchiveCard extends React.Component {
  render() {
    return (
      <div className="blog-rightsider-archive">
        <Link to="/blog/archive">所有文章</Link>
      </div>
    );
  }
}
