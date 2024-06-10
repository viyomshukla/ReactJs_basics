import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import photo1 from '../photos/photo3.jpg'
import photo2 from '../photos/photo4.jpg'
import photo3 from '../photos/photo5.jpg'
function UsingCarousel(){
return(
    <Container>
        <Row>
            <Col>
        <Carousel fade variant="dark">
        <Carousel.Item>
            <img src={photo1} className="d block w-100" ></img>
            <Carousel.Caption>
                <h1>First image</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={photo2} className="d block  w-100"></img>
            <Carousel.Caption>
                <h1>Second image</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={photo3} className="d block  w-100"></img>
            <Carousel.Caption>
                <h1>Third image</h1>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Col>
        </Row>
    </Container>
)
}
export default UsingCarousel;