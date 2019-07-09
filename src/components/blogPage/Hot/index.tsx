import * as React from 'react'
import Card from '../Card'
import { ArticleItem as ArticleInterface } from '../interfaces'
import styles from './index.module.scss'

interface IState {
  articleList: ArticleInterface[]
}
interface IProps {
}

const articleList: ArticleInterface[] = [{
  id: 1,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}, {
  id: 2,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
  banner: 'https://51nbimg.u51.com/41b8b086d4684836b08535699e400ee1.jpeg',
}, {
  id: 3,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}, {
  id: 4,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}, {
  id: 5,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}, {
  id: 6,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}]

class Hot extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      articleList: [],
    }
  }
  componentDidMount() {
    this.setState({
      articleList,
    })
  }
  onClickItem(id: number) {
    console.log(id)
  }
  render() {
    const { onClickItem } = this
    const articleList = this.state.articleList
    return (
      <div className={styles.hot}>
        <Card title="热门文章">
            <div className={styles.articleList}>
              {
                articleList.map((article: ArticleInterface) => (
                  <div key={article.id} 
                    onClick={() => {onClickItem(article.id)}}
                    className={styles.article}>{article.title}</div>
                ))
              }
            </div>
        </Card>
      </div>
    );
  }
}

export default Hot