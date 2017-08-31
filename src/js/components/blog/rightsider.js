import React from 'react';
import ArchiveCard from './archivecard';
import CategoryCard from './categorycard';
import LabelCard from './labelcard';
import '../../../css/blog/rightsider.css';

export default class RightSider extends React.Component {
  render() {
    return (
      <div className="blog-rightsider">
        <ArchiveCard />
        <CategoryCard />
        <LabelCard />
      </div>
    );
  }
}
