import React from 'react';
import HomeCard from './homecard';
import '../../../css/homecard.css';

const data = [
  {
    cardId: 1,
    cardName: 'Blog',
    cardUrl: '/blog',
    cardContent: [
      {
        title: 'JavaScript数据类型的存储',
        url: '/blog/article1',
      }, {
        title: '原生JS实现最简单的图片懒加载',
        url: '/blog/article2',
      }, {
        title: '用React实现一个简易的TodoList',
        url: '/blog/article2',
      },
    ],
  }, {
    cardId: 2,
    cardName: 'Demo',
    cardUrl: '/demo',
    cardContent: [
      {
        title: '图片懒加载',
        url: '/demo/1',
      }, {
        title: 'TodoList',
        url: '/demo/2',
      },
    ],
  }, {
    cardId: 3,
    cardName: 'About Me',
    cardUrl: '/about',
    cardContent: [
      {
        title: 'name : axuebin',
        url: '/',
      }, {
        title: 'age : 25',
        url: '/',
      },
    ],
  },
];
const taskList = data.map(item => <HomeCard key={item.cardId} cardId={item.cardId} cardUrl={item.cardUrl} cardName={item.cardName} cardContent={item.cardContent} />);
export default class HomeCardArea extends React.Component {
  render() {
    return (
      <div className="home-card-area">
        {taskList}
      </div>
    );
  }
}
