import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import './index.css';

export default class FileSelector extends Component {
  state = {
    files: [],
    activeFile: {}
  }

  componentDidMount() {
    const api = ``;
    axios.get(`${api}`)
      .then(res => {
        const files = res.product_urls;
        this.setState({ files, activeFile: files[0] });
      })
  }

  showFile(file) {
    this.setState({ activeFile: file });
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => {
        return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
      }
    };
    return (
      <div className='selectorContainer'>
        <div className='desctopView'>
          <div className='leftPanel'>
            { this.state.files.map(file => 
              (
                <div key={file.url} className='previewPlayer'>
                  {file.type === 'video' ? (
                    <ReactPlayer width='100%' height='100%' url={file.url} />
                  ) : (
                    <img alt='' src={file.url} />
                  )}
                  <div className='clickableArea' onClick={() => this.showFile(file)}></div>
                </div>
              )
            )}
          </div>
          <div className='fileView'>
            {this.state.activeFile.type === 'video' ? (
              <ReactPlayer width='100%' height='100%' url={this.state.activeFile.url} />
            ) : (
              <img alt='' src={this.state.activeFile.url} />
            )}
          </div>
        </div>
        <div className='mobileView'>
          <Slider {...settings}>
            { this.state.files.map(file => 
              (
                <div key={file.url} className='previewPlayer'>
                  {file.type === 'video' ? (
                    <ReactPlayer width='100%' height='100%' url={file.url} />
                  ) : (
                    <img alt='' src={file.url} />
                  )}
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    )
  }
}
