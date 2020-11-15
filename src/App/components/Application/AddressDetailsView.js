import React, { useState } from "react";
import { Form } from "react-bootstrap";
const AddressDetails = () => {
  const [currentAddress, setCurrentAddress] = useState("");
  const [currentAddressLandmark, setCurrentAddressLandmark] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [permanentAddressLandmark, setPermanentAddressLandmark] = useState("");

  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Current Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={currentAddress}
            onChange={(event) => setCurrentAddress(event.target.value)}
            disabled
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Current Address Landmark</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={currentAddressLandmark}
            onChange={(event) => setCurrentAddressLandmark(event.target.value)}
            disabled
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Type" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address Pincode</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Pincode" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address City</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address City" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address State</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address State" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address Accomodation</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Accomodation" disabled />
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Permanent Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={permanentAddress}
            onChange={(event) => setPermanentAddress(event.target.value)}
            disabled
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Permanent Address Landmark</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={permanentAddressLandmark}
            onChange={(event) => setPermanentAddressLandmark(event.target.value)}
            disabled
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Type" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address Pincode</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Pincode" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address City</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address City" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address State</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address State" disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address Accomodation</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Accomodation" disabled />
        </Form.Group>
      </Form>
    </>
  );
};

export default AddressDetails;
