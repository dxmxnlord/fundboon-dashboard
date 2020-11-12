import React, { useState } from "react";
import { Form } from "react-bootstrap";
const ContactInformation = () => {
  const [permanentAddress, setPermanentAddress] = useState("");
  const [communicationAddress, setCommunicationAddress] = useState("");

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setCommunicationAddress(permanentAddress);
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Permanent Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={permanentAddress}
            onChange={(event) => setPermanentAddress(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Communication Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={communicationAddress}
            onChange={(event) => setCommunicationAddress(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Same as permanent address"
            onChange={handleCheckbox}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default ContactInformation;
