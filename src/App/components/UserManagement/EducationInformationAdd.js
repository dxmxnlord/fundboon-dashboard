import React, { useState } from "react";
import { Form } from "react-bootstrap";
const EducationInformation = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Qualification</Form.Label>
          <Form.Control type="text" placeholder="Enter qualification" />
        </Form.Group>
      </Form>
    </>
  );
};

export default EducationInformation;
