import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';


function Imageslider() {

    return (

        <div>
            <Carousel>
        <Carousel.Item>
          <img src={img1} height="700px" max-width="1500px" alt="image1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} height="700px" max-width="1500px" alt="image2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} height="700px" max-width="1500px" alt="image3" />
        </Carousel.Item>
      </Carousel>

        </div>
    )
}

export default Imageslider;