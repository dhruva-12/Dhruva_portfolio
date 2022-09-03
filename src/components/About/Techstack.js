import React from "react";
import { Col, Row } from "react-bootstrap";


function Techstack(props) {
  return (
    <>
    <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
       <Col className="skill-name" xs={4}>
       <ul><li>{props.name}</li> </ul>
      </Col>
      {/* <Col xs={6}>
        <Rating
          readonly
          start={0}
          stop={5}
          initialRating={props.initialRating}
          className="rating"
        />
      </Col> */}
    </Row>
    </>
  );
}

export default Techstack;
