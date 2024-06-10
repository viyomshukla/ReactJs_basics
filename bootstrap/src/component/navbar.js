import React from "react";
import {Col,Container, Nav,NavDropdown,NavLink,Navbar,Row,} from "react-bootstrap";
import photo from "../photos/photo2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateNavbar() {
    
  return (
    <Container fluid="lg" className="my-4">
      <Row>
        <Col>
          <Navbar bg="primary" expand="sm" fixed="top">
            <img src={photo} height="50px" width="50px"></img>
            <Navbar.Brand
              href="https://web.whatsapp.com/"
              className="mx-3 fw-bold"
              style={{ fontStyle: "italic" }}
            >
              Demo Website
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="id1"></Navbar.Toggle>

            <Navbar.Collapse id="id1">
              <Nav className="ms-auto">
                <NavLink href="https://en.wikipedia.org/wiki/Home" className=" fw-bold">
                  Home
                </NavLink>
                <NavLink href="#" className=" fw-bold">
                  About
                </NavLink>
                <NavLink href="https://www.ibps.in/index.php/contact-us/" className=" fw-bold">
                  Service
                </NavLink>

                <NavDropdown title="order" className=" fw-bold">
                  <NavDropdown.Header>header</NavDropdown.Header>
                  <NavDropdown.Item>order1</NavDropdown.Item>
                  <NavDropdown.Divider></NavDropdown.Divider>
                  <NavDropdown.Item>order2</NavDropdown.Item>
                  <NavDropdown.Divider></NavDropdown.Divider>
                  <NavDropdown.Item>order3</NavDropdown.Item>
                </NavDropdown>

                <NavLink href="#" className=" fw-bold">
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Navbar>
            <div style={{ marginTop: "44px" }}>
              NavigationBar Component: This component includes a responsive
              navigation bar with links aligned to the right using the ms-auto
              class. MyComponent: This component includes a Container with some
              text content wrapped in Row and Col components for proper layout
              and responsiveness. Content: The text content is structured within
              the Col component, ensuring it's centered and well-aligned within
              the Container. This setup ensures a responsive layout with a
              navigation bar at the top and some well-structured text content
              below. NavigationBar Component: This component includes a
              responsive navigation bar with links aligned to the right using
              the ms-auto class. MyComponent: This component includes a
              Container with some text content wrapped in Row and Col components
              for proper layout and responsiveness. Content: The text content is
              structured within the Col component, ensuring it's centered and
              well-aligned within the Container. This setup ensures a responsive
              layout with a navigation bar at the top and some well-structured
              text content below. NavigationBar Component: This component
              includes a responsive navigation bar with links aligned to the
              right using the ms-auto class. MyComponent: This component
              includes a Container with some text content wrapped in Row and Col
              components for proper layout and responsiveness. Content: The text
              content is structured within the Col component, ensuring it's
              centered and well-aligned within the Container. This setup ensures
              a responsive layout with a navigation bar at the top and some
              well-structured text content below. NavigationBar Component: This
              component includes a responsive navigation bar with links aligned
              to the right using the ms-auto class. MyComponent: This component
              includes a Container with some text content wrapped in Row and Col
              components for proper layout and responsiveness. Content: The text
              content is structured within the Col component, ensuring it's
              centered and well-aligned within the Container. This setup ensures
              a responsive layout with a navigation bar at the top and some
              well-structured text content below.
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
export default CreateNavbar;
