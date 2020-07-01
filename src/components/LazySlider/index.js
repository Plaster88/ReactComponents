import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './index.css';

export default class LazySlider extends Component {
  state = {
    files: []
  }

  componentDidMount() {
    const api = ``;
    axios.get(`${api}`)
      .then(res => {
        const files = res.product_urls;
        this.setState({ files });
      })
  }

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
