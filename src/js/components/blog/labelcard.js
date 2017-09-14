import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { COLOR_LABEL_BLOG, COLOR_LABEL_CATEGORY } from '../../constants/config';
import '../../../css/blog/rightsider.css';

export default class LabelCard extends React.Component {
  render() {
    const tagList = [];
    const tagHash = {};
    const issues = this.props.issues;
    // 类别去重计数（待优化）
    for (let i = 0; i < issues.length; i += 1) {
      for (let j = 0; j < issues[i].labels.length; j += 1) {
        const label = issues[i].labels[j];
        if (label.color !== COLOR_LABEL_BLOG && label.color !== COLOR_LABEL_CATEGORY) {
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

    const tagLinkList = tagList.map((item) => {
      const style = {
        fontSize: 16,
      };
      if (item.sum > 1) {
        const radio = item.sum * 2;
        const fontSize = style.fontSize + radio;
        if (fontSize < 30) {
          style.fontSize = fontSize;
        } else {
          style.fontSize = 30;
        }
      }
      return (<Link key={item.id} to={`/blog/tag/${item.url}`} style={style} >{item.name}</Link>);
    });

    return (
      <div className="blog-rightsider-tagcard">
        <div className="blog-rightsider-tagcard-title"><Icon type="tag-o" /> 标签</div>
        <div className="blog-rightsider-tagcard-content">
          {tagLinkList}
        </div>
      </div>
    );
  }
}

LabelCard.defaultProps = {
  issues: [],
};

LabelCard.propTypes = {
  issues: PropTypes.array,
};
