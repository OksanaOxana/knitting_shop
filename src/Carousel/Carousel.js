import Carousel from 'react-bootstrap/Carousel';
import woman_hands from '../woman-hands.jpg';
import knitted_sweaters from '../knitted-sweaters.jpg';
import close_up_hands from '../close-up-hands.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src = {woman_hands} alt = "woman-hands" width="600px" height = "400px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {knitted_sweaters} alt = "sweaters" width="600px" height = "400px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {close_up_hands} alt = "sweaters" width="600px" height = "400px"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;