import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import PersonalDetails from "./PersonalDetailsView";
import AddressDetails from "./AddressDetailsView";
import EmploymentDetails from "./EmploymentDetailsView";
import LoanDetails from "./LoanDetailsView";
import BankDetails from "./BankDetailsView";

const ViewApplication = () => {
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
            Personal Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href="#">
            Address Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" href="#">
            Employement Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4" href="#">
            Loan Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5" href="#">
            Bank Details
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {currentForm === 1 && <PersonalDetails />}
      {currentForm === 2 && <AddressDetails />}
      {currentForm === 3 && <EmploymentDetails />}
      {currentForm === 4 && <LoanDetails />}
      {currentForm === 5 && <BankDetails />}
    </>
  );
};

export default ViewApplication;
