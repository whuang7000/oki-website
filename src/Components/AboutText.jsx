import React, { Component } from 'react';
import "./styles.css"

class AboutText extends Component {
  render() {
    return (
      <div>
        <div className='textBox2'>
          <p className = 'convenient'> As UC Berkeley students, we had very limited karaoke options. We want to provide a space
           that is convenient and private where anyone can sing their hearts out.</p>
          <p>Since first launch in 2016, mini karaoke bars have become a multi-billion dollar market in China,
          with 100,000 boxes installed by 2018 and 400+ more being installed each day.</p>
          <p> Our original model (pictured) is currently being manufactured in China, and will arrive in May. We are currently negotiating an
           installation and partnership contract with Westfield Mall in San Francisco and Oakridge.
          </p>
        </div>
      </div>
    )
  }
}

export default AboutText;
