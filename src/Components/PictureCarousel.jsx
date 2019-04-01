import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class PictureCarousel extends Component {

    render() {
        return (
          <Carousel autoPlay>
              <div>
                <img src={require('./assets/WarmOki.jpg')} alt = 'Hello' />
              </div>
            </Carousel>
        );
    }
};

export default PictureCarousel;
