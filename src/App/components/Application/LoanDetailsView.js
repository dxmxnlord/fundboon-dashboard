import React, { useState } from "react";
import { Form } from "react-bootstrap";
const LoanDetails = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan Amount" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan City</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan City" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan Tenure</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan Tenure" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan Purpose</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan Purpose" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset Worth</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset Worth" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset City</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset City" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset State</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset State" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset Type" disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Home Loan City</Form.Label>
          <Form.Control type="text" placeholder="Enter Home Loan City" disabled/>
        </Form.Group>
      </Form>
    </>
  );
};

export default LoanDetails;
