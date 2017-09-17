import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';
import ArticleList from './articlelist';
import CategoryCard from './categorycard';
import '../../../css/category/category.css';

class Category extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded());
  }
  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className="category">
        <div className="category-container">
          <Row>
            <Col span={18}><ArticleList issues={this.props.items} /></Col>
            <Col span={6}><CategoryCard issues={this.props.items} /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

Category.defaultProps = {
  dispatch: null,
  isFetching: true,
  items: [],
};

Category.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  const { isFetching, items } = state || { isFetching: true, items: [] };
  return { isFetching, items };
}

export default connect(mapStateToProps)(Category);
