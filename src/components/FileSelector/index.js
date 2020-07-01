import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
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
    return (
      <div className='selectorContainer'>
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
    )
  }
}
