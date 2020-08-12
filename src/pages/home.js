import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const fotos = [
    {
      name: 'Foto 0',
      url: "https://cdn.pixabay.com/photo/2020/01/16/17/21/pantheon-4771206_960_720.jpg"
    },
  
    {
      name: 'Foto 1',
      url: "./assets/1.png"
    },
  
    {
      name: 'Foto 2',
      url: "./assets/2.png"
    },
  
    {
      name: 'Foto 3',
      url: "./assets/3.png"
    },
  
    {
      name: 'Foto 4',
      url: "./assets/4.png"
    }
  ]

const Home = () =>{

    const settings = {
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className="containerHome">
            <h1>Home</h1>
            <Slider {...settings}>
                {fotos.map((foto) => {
                    return(
                        <div>
                            <img width="100%" src={foto.url}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default Home