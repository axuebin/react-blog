import * as React from 'react'
import styles from './index.module.scss'

interface State {
  show: boolean
  parentNode: HTMLDivElement | null
}
interface Props {
}

class BackTop extends React.Component<Props, State> {
  private backTopRef: React.RefObject<HTMLInputElement>
  constructor(props: any) {
    super(props)
    this.state = {
      show: false,
      parentNode: null,
    }
    this.backTopRef = React.createRef(),
    this.handlerScroll = this.handlerScroll.bind(this)
  }
  componentDidMount() {
    const parentNode = (this.backTopRef.current as HTMLDivElement).parentNode as HTMLDivElement
    this.setState({
      parentNode
    })
    window.addEventListener('scroll', this.handlerScroll, true)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlerScroll, true)
  }
  handlerScroll() {
    const { parentNode } = this.state
    if (parentNode) {
      const scrollTop = parentNode.scrollTop
      this.setState({
        show: scrollTop > 300
      })
    }
  }
  backTop() {
    const { parentNode } = this.state
    if (parentNode) {
      parentNode.scrollTop = 0
    }
  }
  render() {
    const { show } = this.state
    return (
      <div ref={this.backTopRef}>
        {
          show ? <div className={styles.backTop} onClick={() => this.backTop()}></div> : ''
        }
      </div>
    )
  }
}

export default BackTop