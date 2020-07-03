import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './index.css';

export default class LazySlider extends Component {
  /*state = {
    files: []
  }*/

  state = { files: [ { url: 'https://www.youtube.com/watch?v=5aF_fLNcnAk', type: 'video' },
    { url: 'https://www.youtube.com/watch?v=yP6VGTtRgMI', type: 'video' },
    { url: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg', type: 'image' },
    { url: 'https://www.youtube.com/watch?v=yP6VGTtRgMI', type: 'video' },
    { url: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg', type: 'image' } ]
  }

  /*componentDidMount() {
    const api = ``;
    axios.get(`${api}`)
      .then(res => {
        const files = res.product_urls;
        this.setState({ files });
      })
  }*/

  scrollLeft() {
    const scrollStep = 700;
    const slider = document.getElementById('slider');
    const sl = slider.scrollLeft;
    if ((sl - scrollStep) <= 0) {
      slider.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } else {
      slider.scrollTo({
        top: 0,
        left: sl - scrollStep,
        behavior: "smooth"
      });
    }
  }

  scrollRight() {
    const scrollStep = 700;
    const slider = document.getElementById('slider');
    const sl = slider.scrollLeft;
    const cw = slider.scrollWidth;
    if ((sl + scrollStep) >= cw) {
      slider.scrollTo({
        top: 0,
        left: cw,
        behavior: "smooth"
      });
    } else {
      slider.scrollTo({
        top: 0,
        left: sl + scrollStep,
        behavior: "smooth"
      });
    }
  }

  render() {
    return (
      <div className='sliderContainer'>
        <div className='arrows prev' onClick={this.scrollLeft}>
          <div></div>
        </div>
        <div className='slider' id='slider'>
          { this.state.files.map(file => 
            (
              <div key={file.url} className={file.type === 'video' ? 'sliderElement video' : 'sliderElement'}>
                {file.type === 'video' ? (
                  <ReactPlayer width='100%' height='100%' url={file.url} />
                ) : (
                  <img alt='' src={file.url} />
                )}
              </div>
            )
          )}
        </div>
        <div className='arrows next' onClick={this.scrollRight}>
          <div></div>
        </div>
      </div>
    )
  }
}
