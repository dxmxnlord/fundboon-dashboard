import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import PersonalInformation from "./PersonalInformationAdd";
import ContactInformation from "./ContactInformationAdd";
import EducationInformation from "./EducationInformationAdd";
import EmployeeInformation from "./EmploymentInformationAdd";
import OthersInformation from "./OthersInformationAdd";

const AddUser = () => {
  const [currentForm, updateCurrentForm] = useState(1);
  const handleSelect = (eventKey) => updateCurrentForm(parseInt(eventKey));

  return (
    <>
      <Nav
        variant="pills"
        activeKey={currentForm}
        onSelect={handleSelect}
        style={{ marginBottom: "1.5rem" }}
      >
        <Nav.Item>
          <Nav.Link eventKey="1" href="#">
            Personal
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href="#">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" href="#">
            Education
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4" href="#">
            Employment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5" href="#">
            Others
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {currentForm === 1 && <PersonalInformation />}
      {currentForm === 2 && <ContactInformation />}
      {currentForm === 3 && <EducationInformation />}
      {currentForm === 4 && <EmployeeInformation />}
      {currentForm === 5 && <OthersInformation />}
    </>
  );
};

export default AddUser;
