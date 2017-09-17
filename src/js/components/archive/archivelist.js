import React from 'react';
import PropTypes from 'prop-types';
import ArchiveItemList from './archiveitemlist';

export default class ArchiveList extends React.Component {
  constructor() {
    super();
    this.getYearData = this.getYearData.bind(this);
  }
  getYearData(issues) {
    const len = issues.length;
    let year = 0;
    const articles = {};
    for (let i = 0; i < len; i += 1) {
      const time = parseInt(issues[i].updated_at.substring(0, 4), 10);
      if (time !== year) {
        if (!articles[time]) {
          articles[time] = [];
        }
        year = time;
      }
      articles[time].push(issues[i]);
    }
    return articles;
  }
  render() {
    const articles = this.getYearData(this.props.issues);
    const articleList = [];
    Object.keys(articles).forEach((key) => {
      if (Object.prototype.toString.call(articles[key]) === '[object Array]') {
        articleList.push(<ArchiveItemList key={key} year={key} items={articles[key]} />);
      }
    });
    return (
      <div className="archive-list-area">
        <div className="archive-list">
          {articleList}
        </div>
      </div>
    );
  }
}

ArchiveList.defaultProps = {
  issues: null,
};

ArchiveList.propTypes = {
  issues: PropTypes.array,
};
