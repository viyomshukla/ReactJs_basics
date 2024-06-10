import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Contain(){
return(
    <Container>
        <Row>
            <Col className="bg-success p-2 my-2 "md={5}>
            <div>success</div>
            
            </Col>
            <Col className="bg-primary p-2 my-2 " xs={2}>
            <div>primary</div>
            
            </Col>
            <Col className="bg-danger p-2 my-2">
            <div>danger</div>
            
            </Col>
        </Row>
        <Row>
            <Col className="bg-secondary p-2 my-2 ">
            <div>secondary</div>
            
            </Col>
            <Col className="bg-warning p-2 my-2 ">
            <div>warning</div>
            
            </Col>
            <Col className="bg-info p-2 my-2">
            <div>info</div>
            
            </Col>
        </Row>
        <Row>
            <Col className="bg-light p-2 my-2 ">
            <div>light</div>
            
            </Col>
            <Col className="bg-dark p-2 my-2 ">
            <div style={{color:"white"}}>dark</div>
            
            </Col>
            <Col className="bg-danger p-2 my-2">
            <div>col1</div>
            
            </Col>
        </Row>
</Container>
)

}
export default Contain