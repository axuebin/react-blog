import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './articleitem';

export default class ArticleList extends React.Component {
  render() {
    const articlelist = [];
    const issues = this.props.issues;
    const currentPage = this.props.pageNumber;
    const defaultPageSize = this.props.defaultPageSize;
    const start = currentPage === 1 ? 0 : (currentPage - 1) * defaultPageSize;
    const end = start + defaultPageSize < issues.length ? start + defaultPageSize : issues.length;
    for (let i = start; i < end; i += 1) {
      const item = issues[i];
      console.log(item);
      articlelist.push(<ArticleItem key={item.id} number={item.number} title={item.title} labels={item.labels} time={item.created_at} desc={item.body} />);
    }
    return (
      <div className="archive-list">
        {articlelist}
      </div>
    );
  }
}

ArticleList.defaultProps = {
  issues: null,
  pageNumber: 1,
  defaultPageSize: 1,
};

ArticleList.propTypes = {
  issues: PropTypes.array,
  pageNumber: PropTypes.number,
  defaultPageSize: PropTypes.number,
};
