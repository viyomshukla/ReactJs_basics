import React from "react";
import { Card, Container, Row,Col, Button } from "react-bootstrap";
import photo from '../photos/photo2.jpg'
function Makecard(){
    return(
    <div style={{backgroundColor:"rgb(108, 187, 187)"}}>
        <Container className="w-25 mt-5">
            <Row>
                <Col>
                <Card bg="warning" border="secondary" style={{ border: "4px solid red" }}>
                    <Card.Img src={photo} height="120px"></Card.Img>
                    
                    <Card.Header style={{textAlign:"center"}}>This Is For You</Card.Header>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Happy Birthday</Card.Title>
                       
                     
                        <Card.Text>
                        So you've chosen a beautiful card for just the right person… but it's blank inside. What should you write? Some people find it incredibly easy to come up with just the right thing to say, while others of us struggle to say more than just “Happy Birthday.” Well relax; as a greeting card maker, I've got you covered!  Check out this handy list of ideas, tweak them as needed to fit your occasion, and pop that card in the mail!
                        </Card.Text>
                        <Card.Link href="https://upskill.tutedude.com/course/lecture-reactjs" 
                        
                        style={{color:"red", marginLeft:"50%"}}>Link</Card.Link>
                    </Card.Body>
                   
                    <Card.Footer style={{textAlign:"center"}}>Thank You</Card.Footer>
                    <div className="d-grid">
                        <Button variant="primary" href="https://upskill.tutedude.com/course/lecture-reactjs">Click Me</Button>
                        
                    </div>
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    </div>
    )
}
export default Makecard;