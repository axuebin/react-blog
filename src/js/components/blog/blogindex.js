import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';
import ArticleArea from './articlearea';
import RightSider from './rightsider';

class BlogIndex extends React.Component {
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
            <Col xs={24} sm={24} md={18}><ArticleArea issues={this.props.items} /></Col>
            <Col xs={0} sm={0} md={6}><RightSider issues={this.props.items} /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

BlogIndex.defaultProps = {
  dispatch: null,
  isFetching: true,
  items: [],
};

BlogIndex.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  const { isFetching, items } = state || { isFetching: true, items: [] };
  return { isFetching, items };
}

export default connect(mapStateToProps)(BlogIndex);
