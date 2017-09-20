import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';
import ArticleList from './articlelist';
import CategoryCard from './categorycard';
import '../../../css/archive/archive.css';

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
      <div className="main">
        <div className="main-container">
          <Row>
            <Col xs={24} sm={24} md={18}><ArticleList issues={this.props.items} /></Col>
            <Col xs={0} sm={0} md={6}><CategoryCard issues={this.props.items} /></Col>
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
