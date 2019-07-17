import * as React from 'react'
import hljs from 'highlight.js'
import BackTop from '../../components/common/BackTop'
import { getDetail } from '../../api/service'
import { qs, formatDateStamp } from '../../lib/utils'
import styles from './index.module.scss'
import 'highlight.js/styles/vs2015.css'

interface State {
  detail: any
}
interface Props {
}

class DetailPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      detail: {},
    }
  }
  componentDidMount() {
    this.init()
  }
  componentDidUpdate() {
    // this.init()
    this.updateCodeSyntaxHighlighting()
  }

  init() {
    console.log()
    this.updateCodeSyntaxHighlighting()
    const { _id } = qs()
    getDetail({ _id }).then(res => {
      if (res.success) {
        this.setState({
          detail: res.data
        })
      }
    })
  }

  updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block)
    })
  }

  render() {
    const { detail } = this.state
    const { title, createdDate, author, category, pv, banner, content } = detail
    return (
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.left}>
            {
              detail && Object.keys(detail).length > 0 ?
                <div className={styles.detail}>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.info}>
                    <span className={styles.date}>{formatDateStamp(createdDate)}</span>
                    <span className={styles.author}>{author}</span>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.pv}>阅读量：{pv}</span>
                  </div>
                  {
                    banner ? <div className={styles.banner}>
                      <img className={styles.image} src={banner}></img>
                    </div> : ''
                  }
                  {
                    content ? <div className={styles.content} dangerouslySetInnerHTML = {{ __html: content }}></div> : ''
                  }
                </div>
                : ''
            }
          </div>
          {/* <div className={styles.right}></div> */}
        </div>
        <BackTop></BackTop>
      </div>
    )
  }
}

export default DetailPage
