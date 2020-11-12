import React, { useState } from "react";
import { Form } from "react-bootstrap";
const OthersInformation = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form>
    </>
  );
};

export default OthersInformation;
