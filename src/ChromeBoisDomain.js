import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = ({ clientX, clientY }) => {
    drawChromeBoiAtCoords(clientX, clientY)
  }

  handleClick = (event) => {
    toggleCycling()
  }

  handleKeyPress = ({ key }) => {
    if (key === 'a') {
      resize('+')
    } else if (key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}