import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cero from '../assets/0.png'
import uno from '../assets/1.png'
import dos from '../assets/2.png'
import tres from '../assets/3.png'
import cuatro from '../assets/4.png'

 export default class Home extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="contenedorImgSlider">
            <img alt="0.png" src={cero}/>
          </div>

          <div>
            <img alt="1.png" src={uno}/>
          </div>

          <div>
            <img alt="2.png" src={dos}/>
          </div>
          
          <div>
            <img  alt="3.png" src={tres}/>
          </div>

          <div>
            <img alt="4.png" src={cuatro}/>
          </div>
        </Slider>
      </div>
    );
  }
}

