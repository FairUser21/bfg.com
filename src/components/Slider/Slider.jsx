import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const ImageSlider = () => {

  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://d2q9qmpt911m8b.cloudfront.net/merch/kindtdigsale/dh.png'
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://d2q9qmpt911m8b.cloudfront.net/merch/bergerb2020/dh.png'
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://d2q9qmpt911m8b.cloudfront.net/merch/kqns_i1/dh.png'
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://d2q9qmpt911m8b.cloudfront.net/merch/tfhcff_i2/dh.png'
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>

  );
};

export default ImageSlider;