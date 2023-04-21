import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
import banner1 from '../Assets/Images/banner1.jpg';
import banner2 from '../Assets/Images/banner2.jpg';
import banner3 from '../Assets/Images/banner3.jpg';
import banner4 from '../Assets/Images/banner4.jpg';


const Banner = () => {
    return (
    <>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Handmade Ceramics</h2>
          <p>Made with Love</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Handmade Ceramics</h2>
          <p>Each piece is handcrafted and hand poured as a result no two pieces are alike</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Handmade Ceramics</h2>
          <p>Fill your space with the unmatched beauty</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Handmade Ceramics</h2>
          <p>Each piece is unique and handmade with love</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>

    )
}

export default Banner
