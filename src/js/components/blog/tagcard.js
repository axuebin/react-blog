import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { COLOR_BLOG_CATEGORY, COLOR_LABEL_CATEGORY } from '../../constants/config';
import '../../../css/blog/tagcard.css';

export default class TagCard extends React.Component {
  render() {
    const tagList = [];
    const tagHash = {};
    const issues = this.props.issues;
    // 类别去重计数（待优化）
    for (let i = 0; i < issues.length; i += 1) {
      for (let j = 0; j < issues[i].labels.length; j += 1) {
        const label = issues[i].labels[j];
        if (label.color !== COLOR_BLOG_CATEGORY && label.color !== COLOR_LABEL_CATEGORY) {
          const id = label.id;
          const name = label.name;
          if (tagHash[name] === undefined) {
            tagHash[name] = true;
            const tagTemp = { id, name, url: encodeURI(name), sum: 1 };
            tagList.push(tagTemp);
          } else {
            for (let k = 0; k < tagList.length; k += 1) {
              if (tagList[k].name === name) {
                tagList[k].sum += 1;
              }
            }
          }
        }
      }
    }
    const tagLinkList = tagList.sort((a, b) => b.sum - a.sum).map(item => <Link key={item.id} to={`/blog/tag/${item.url}`}>{item.name} ({item.sum})</Link>);
    return (
      <div className="rightsider-card">
        <div className="blog-tagcard-title"><Icon type="tag-o" /> 标签</div>
        <div className="blog-tagcard-content">
          {tagLinkList}
        </div>
      </div>
    );
  }
}

TagCard.defaultProps = {
  issues: [],
};

TagCard.propTypes = {
  issues: PropTypes.array,
};
