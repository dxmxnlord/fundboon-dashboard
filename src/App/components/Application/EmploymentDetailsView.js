import React, { useState } from "react";
import { Form } from "react-bootstrap";
const EmploymentDetails = props => {
  const [officeAddress, setOfficeAddress] = useState(props.officeAddress);
  const [officeAddressLandmark, setOfficeAddressLandmark] = useState(props.officeAddressLandmark);
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Employment Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Employment Type" value={props.emp} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Income</Form.Label>
          <Form.Control type="text" placeholder="Enter Income" value={props.income} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Enter Company" value={props.company} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Turnover</Form.Label>
          <Form.Control type="text" placeholder="Enter Turnover" value={props.turnover} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Industry Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Industry Type" value={props.industryType} disabled />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Office Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={officeAddress}
            onChange={(event) => setOfficeAddress(event.target.value)}
            disabled
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Office Address Landmark</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={officeAddressLandmark}
            onChange={(event) => setOfficeAddressLandmark(event.target.value)}
            disabled
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Office Address Pincode</Form.Label>
          <Form.Control type="text" placeholder="Enter Office Address Pincode" value={props.officeAddressPincode} disabled />
        </Form.Group>
      </Form>
    </>
  );
};

export default EmploymentDetails;
