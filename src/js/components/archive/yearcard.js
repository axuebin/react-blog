import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default class YearCard extends React.Component {
  constructor() {
    super();
    this.getYearSum = this.getYearSum.bind(this);
  }
  getYearSum(issues) {
    const yearList = [];
    const yearHash = {};
    for (let i = 0; i < issues.length; i += 1) {
      const year = parseInt(issues[i].updated_at.substring(0, 4), 10);
      if (yearHash[year] === undefined) {
        yearHash[year] = true;
        const yearTemp = { year, sum: 1 };
        yearList.push(yearTemp);
      } else {
        for (let j = 0; j < yearList.length; j += 1) {
          if (yearList[j].year === year) {
            yearList[j].sum += 1;
          }
        }
      }
    }
    return yearList;
  }
  render() {
    const yearList = this.getYearSum(this.props.issues).map(item => <li key={item.year}>{item.year}<span>{item.sum}</span></li>);
    return (
      <div className="rightsider">
        <div className="rightsider-card">
          <div className="rightsider-card-title"><Icon type="bars" /> 统计</div>
          <div className="rightsider-card-content">
            {yearList}
          </div>
        </div>
      </div>
    );
  }
}

YearCard.defaultProps = {
  issues: null,
};

YearCard.propTypes = {
  issues: PropTypes.array,
};
