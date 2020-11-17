import React, { useState } from "react";
import { Form } from "react-bootstrap";
const LoanDetails = props => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan Amount" value={props.loanAmount} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan City</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan City" value={props.loanCity} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan Tenure</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan Tenure" value={props.loanTenure} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Loan Purpose</Form.Label>
          <Form.Control type="text" placeholder="Enter Loan Purpose" value={props.loanPurpose} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset Worth</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset Worth" value={props.assetWorth} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset City</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset City" value={props.assetCity} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset State</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset State" value={props.assetState} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Asset Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Asset Type" value={props.assetType} disabled/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Home Loan City</Form.Label>
          <Form.Control type="text" placeholder="Enter Home Loan City" value={props.homeLoanCity} disabled/>
        </Form.Group>
      </Form>
    </>
  );
};

export default LoanDetails;
