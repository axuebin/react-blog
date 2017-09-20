import React from 'react';
import DemoCard from '../components/demo/democard';
import '../../css/demo/demo.css';

export default class Blog extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
        <div className="main-container demo-container">
          <DemoCard name="React实现的TodoList" demo="http://axuebin.com/react-todolist" src="https://github.com/axuebin/react-todolist" img="http://omufjr5bv.bkt.clouddn.com/demotodolist.png" />
          <DemoCard name="React实现的列车站点查询" demo="http://axuebin.com/train-query" src="https://github.com/axuebin/train-query" img="http://omufjr5bv.bkt.clouddn.com/demotrainquery.png" />
          <DemoCard name="React实现的flex布局在线可视化" demo="http://axuebin.com/flex-study" src="https://github.com/axuebin/flex-study" img="http://omufjr5bv.bkt.clouddn.com/demoflex-study.png" />
        </div>
      </div>
    );
  }
}
