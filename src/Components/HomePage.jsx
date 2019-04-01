import React, { Component } from 'react';
//import PictureCarousel from './PictureCarousel.jsx';
//import { Carousel } from 'react-responsive-carousel';
import "./styles.css"
import HeaderText from "./HeaderText.jsx";

class HomePage extends Component {
  render() {
    return (
      <body className='body'>
        <HeaderText/>
        <div className='slider'/>
      </body>
    )
  }
}

export default HomePage;
