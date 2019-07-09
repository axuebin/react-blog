import * as React from 'react'
import './index.scss'
import banner from '../../../static/image/index-banner.png'

function Banner() {
  return (
    <div className="banner">
      <div className="photos">
        <div className="list">
          <div className="item">
            <img src={banner} className="item-image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner