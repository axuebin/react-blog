import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';
import ArchiveList from './archivelist';
import YearCard from './yearcard';
import '../../../css/archive/archive.css';

class Archive extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded());
  }
  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className="archive">
        <div className="archive-container">
          <Row>
            <Col span={18}><ArchiveList issues={this.props.items} /></Col>
            <Col span={6}><YearCard issues={this.props.items} /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

Archive.defaultProps = {
  dispatch: null,
  isFetching: true,
  items: [],
};

Archive.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  const { isFetching, items } = state || { isFetching: true, items: [] };
  return { isFetching, items };
}

export default connect(mapStateToProps)(Archive);
