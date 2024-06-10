import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ReactBs() {
  return (
    <div>
      <Button variant="dark">submit</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <br />
      <br />
      <Button className="btn-btn-primary">Primary</Button>
      <Button className="btn btn-outline-primary" type="submit">
        Primary
      </Button>
      <Button className="btn btn-outline-success">success</Button>
    </div>
  );
}
export default ReactBs;
