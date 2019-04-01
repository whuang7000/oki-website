import React, { Component } from 'react';
import "./styles.css"

class HomeText extends Component {
  render() {
    return (
      <div>
        <div className='textBox'>
          <h1 className='okiText'> Oki: Singing on the Go </h1>
          <p className = 'description'> Soundproof karaoke boxes in shopping malls, airports, bars, and more.</p>
        </div>
        <div className='requestButtonDiv'>
         <a href='mailto:inquiries@okikaraoke.com'>
          <button className = 'requestButton'>
            Request a Booth
          </button>
          </a>
        </div>
      </div>
    )
  }
}

export default HomeText;
