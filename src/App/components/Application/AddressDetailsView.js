import React, { useState } from "react";
import { Form } from "react-bootstrap";
const AddressDetails = props => {
  const [currentAddress, setCurrentAddress] = useState(props.currentAddress);
  const [currentAddressLandmark, setCurrentAddressLandmark] = useState(props.currentAddressLandmark);
  const [permanentAddress, setPermanentAddress] = useState(props.permanentAddress);
  const [permanentAddressLandmark, setPermanentAddressLandmark] = useState(props.permanentAddressLandmark);

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
          <Form.Control type="text" placeholder="Enter Current Address Type" value={props.currentAddressType} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address Pincode</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Pincode" value={props.currentAddressPincode} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address City</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address City" value={props.currentAddressPincodeCity} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address State</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address State" value={props.currentAddressPincodeState} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Current Address Accomodation</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Accomodation" value={props.currentAddressAccomodation} disabled />
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
          <Form.Control type="text" placeholder="Enter Current Address Type" value={props.permanentAddressType} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address Pincode</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Pincode" value={props.permanentAddressPincode} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address City</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address City" value={props.permanentAddressPincodeCity} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address State</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address State" value={props.permanentAddressPincodeState} disabled />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Permanent Address Accomodation</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Address Accomodation" value={props.permanentAddressAccomodation} disabled />
        </Form.Group>
      </Form>
    </>
  );
};

export default AddressDetails;
