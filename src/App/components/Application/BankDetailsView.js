import React, { useState } from "react";
import { Form } from "react-bootstrap";
const BankDetails = props => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant" value={props.coApplicant} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant Income</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant Income" value={props.coApplicantIncome} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant EMI</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant EMI" value={props.coApplicantEMI} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Co-Applicant Relation</Form.Label>
          <Form.Control type="text" placeholder="Enter Co-Applicant Relation" value={props.coApplicantRelation} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan" value={props.exiloan} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan Type" value={props.exiLoanType} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan Bank</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan Bank" value={props.exiLoanBank} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing EMI</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing EMI" value={props.exiEMI} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Existing Loan Transfer</Form.Label>
          <Form.Control type="text" placeholder="Enter Existing Loan Transfer" value={props.transfer} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Cheque Bounce</Form.Label>
          <Form.Control type="text" placeholder="Enter Cheque Bounce" value={props.chqbnc} disabled />
        </Form.Group>
      </Form>
    </>
  );
};

export default BankDetails;
