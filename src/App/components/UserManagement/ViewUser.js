import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import PersonalInformation from "./PersonalInformationView";
import ContactInformation from "./ContactInformationView";
import EducationInformation from "./EducationInformationView";
import EmployeeInformation from "./EmploymentInformationView";
import OthersInformation from "./OthersInformationView";
import Applications from "./ApplicationView";

const ViewUser = () => {
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
        <Nav.Item>
          <Nav.Link eventKey="6" href="#">
            Applications
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {currentForm === 1 && <PersonalInformation />}
      {currentForm === 2 && <ContactInformation />}
      {currentForm === 3 && <EducationInformation />}
      {currentForm === 4 && <EmployeeInformation />}
      {currentForm === 5 && <OthersInformation />}
      {currentForm === 6 && <Applications />}
    </>
  );
};

export default ViewUser;
