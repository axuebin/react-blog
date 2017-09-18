import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

export default class ArticlePaging extends React.Component {
  constructor() {
    super();
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageNumber) {
    this.props.handlePageChange(pageNumber);
  }

  render() {
    return (
      <div className="blog-article-paging">
        <Pagination onChange={this.onChangePage} defaultPageSize={this.props.defaultPageSize} total={this.props.total} />
      </div>
    );
  }
}

ArticlePaging.defaultProps = {
  handlePageChange: null,
  defaultPageSize: 5,
  total: 10,
};

ArticlePaging.propTypes = {
  handlePageChange: PropTypes.func,
  defaultPageSize: PropTypes.number,
  total: PropTypes.number,
};
