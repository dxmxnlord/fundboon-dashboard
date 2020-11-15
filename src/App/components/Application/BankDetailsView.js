import React, { useState } from "react";
import { Form } from "react-bootstrap";
const BankDetails = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant Income</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant Income" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant EMI</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant EMI" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant Relation</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant Relation" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan Type" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan Bank</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan Bank" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing EMI</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing EMI" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan Transfer</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan Transfer" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Cheque Bounce</Form.Label>
          <Form.Control type="text" placeholder="Enter Cheque Bounce" disabled />
        </Form.Group>
      </Form>
    </>
  );
};

export default BankDetails;
