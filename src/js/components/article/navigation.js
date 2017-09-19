import React from 'react';
import marked from 'marked';

// function getTitleText(inputStr){
//   return inputStr.split('>')[1].split('<')[0];
// }

export default class Navigation extends React.Component {
  // componentDidMount(){
  //   const content = marked(this.props.content);
  //   const h2 = content.match(new RegExp('<h2 id="-">([^<]*)</h2>','g')).map(item => getTitleText(item));
  //   const h3 = content.match(new RegExp('<h3 id="-">([^<]*)</h3>','g')).map(item => getTitleText(item));
  //   const h4 = content.match(new RegExp('<h4 id="-">([^<]*)</h4>','g')).map(item => getTitleText(item));
  // }

  render() {
    return (
      <div className="rightsider">
        <div className="rightsider-card">
          <div className="rightsider-card-title">导航</div>
          <div className="rightsider-card-content">
            ing.....
          </div>
        </div>
      </div>
    );
  }
}
