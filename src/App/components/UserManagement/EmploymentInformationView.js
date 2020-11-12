import React, { useState } from "react";
import { Form } from "react-bootstrap";
const EmployeeInformation = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Office Name</Form.Label>
          <Form.Control type="text" placeholder="Enter office name" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Office Address</Form.Label>
          <Form.Control as="textarea" rows={4} disabled />
        </Form.Group>
      </Form>
    </>
  );
};

export default EmployeeInformation;
