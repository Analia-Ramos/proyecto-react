import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
import banner1 from '../images/banner1.JPG';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';


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
          <h3>Handmade Mugs</h3>
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
          <h3>Handmade Mugs</h3>
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
          <h3>Handmade Mugs</h3>
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
          <h3>Handmade Mugs</h3>
          <p>Each piece is unique and handmade with love</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>

    )
}

export default Banner
