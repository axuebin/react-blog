import * as React from 'react'
import Card from '../Card'
import { Tag as TagInterface, Tag } from '../interfaces'
import styles from './index.module.scss'

interface IState {
  tagList: TagInterface[]
}
interface IProps {
}

const tagList: TagInterface[] = [{
  id: 1,
  name: '前端'
}, {
  id: 2,
  name: 'JavaScript'
}, {
  id: 3,
  name: 'webpack'
}, {
  id: 4,
  name: 'babel'
}, {
  id: 5,
  name: '浏览器'
}, {
  id: 6,
  name: '打包'
}, {
  id: 7,
  name: '优化'
}, {
  id: 8,
  name: '数据结构'
}]

class Tags extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      tagList: [],
    }
  }
  componentDidMount() {
    this.setState({
      tagList,
    })
  }
  onClickItem(id: number) {
    console.log(id)
  }
  render() {
    const { onClickItem } = this
    const tagList = this.state.tagList
    return (
      <div className={styles.tags}>
        <Card title="标签">
            <div className={styles.tagList}>
              {
                tagList.map((tag: TagInterface) => (
                  <div key={tag.id} 
                    onClick={() => {onClickItem(tag.id)}}
                    className={styles.tag}>{tag.name}</div>
                ))
              }
            </div>
        </Card>
      </div>
    );
  }
}

export default Tags