import React from "react";
import { Form } from "react-bootstrap";
const PersonalDetails = props => {
  return (
    <>
      <Form>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" value={props.firstName} disabled />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={props.lastName} disabled />
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" custom disabled>
            <option>{props.gender}</option>
            <option>Male</option>
            <option>Female</option>
            <option>Rather not say</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Marital Status</Form.Label>
          <Form.Control as="select" custom disabled>
            <option>{props.maritalStatus}</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Rather not say</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="text" placeholder="Enter Date of Birth" value={props.dob} disabled />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Primary Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter primary email address"
            value={props.primaryEmail}
            disabled
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Secondary Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter alternate email address"
            value={props.secondaryEmail}
            disabled
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Primary Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter primary phone number"
            value={props.mob}
            disabled
          />
          <Form.Text className="text-muted">
            We'll never share your phone number with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Nationality</Form.Label>
          <Form.Control as="select" custom disabled>
            <option>{props.nation}</option>
            <option>India</option>
            <option>USA</option>
            <option>Austra</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Qualification</Form.Label>
          <Form.Control type="text" placeholder="Enter Qualification" value={props.qualification} disabled />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>PAN Number</Form.Label>
          <Form.Control type="text" placeholder="Enter PAN Number" value={props.pan} disabled />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Aadhaar Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Aadhaar Number"
            value={props.aadhaar}
            disabled
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default PersonalDetails;
