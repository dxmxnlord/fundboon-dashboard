import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import classNames from "classnames";
import AddUser from "./AddUser";
import ViewUser from "./ViewUser";

import Swal from "sweetalert2";
import FuzzySearch from "fuzzy-search";
import { useClient } from "../../../client";
import { useCookies } from "react-cookie";
import { GET_ALL_APPLICATIONS_QUERY } from "../../../graphql/queries";

import Aux from "../../../Admin/hoc/_Aux";

const UserManagement = () => {
  const client = useClient();
  const [cookies, removeCookie] = useCookies(["user"]);
  const [application, setApplication] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState("loading");
  const [show, setShow] = useState(false);
  const [showView, setShowView] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseShow = () => setShowView(false);
  const handleShowView = () => setShowView(true);
  const getApplicationsRequest = async (e) => {
    try {
      const application = await client.request(GET_ALL_APPLICATIONS_QUERY);

      setApplication(application.getAllApplicationsRequest);
      console.log(application);
      setLoading("");
    } catch (err) {
      console.log(err);
      setLoading("");
    }
  };
  const Get = () => {
    if (isLoading == "loading") getApplicationsRequest();
  };

  const Details = () => {
    const card = [];

    for (let i = 0; i < application.length; i++) {
      var theDate = new Date(application[i].appliedAt / 1);
      var dateString = theDate.toGMTString();
      card.push(
        <tr>
          <td>
            <input className="form-control" type="checkbox" />
          </td>
          <td scope="row"> {i + 1}</td>
          <td> {dateString}</td>
          <td> {dateString} </td>
          <td> {dateString}</td>
          <td> {application[i].applicantId} </td>
          <td>Admin</td>
          <td> Me</td>
          <td> {i * 1000}</td>
          <td> {application[i].reviewStatus}</td>
          <td>
            {" "}
            <Button onClick={handleShowView}>View</Button>
          </td>
        </tr>
      );
    }
    return card;
  };

  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">User Management</Card.Title>
              <span className="d-block m-t-5">Easily manage users here.</span>
              <Button
                className="float-right"
                variant="secondary"
                onClick={handleShow}
              >
                New User
              </Button>
              <Modal show={showView} onHide={handleCloseShow} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ViewUser />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseShow}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddUser />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <Col md={4} className="float-right">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mb-3"
                />
              </Col>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Sr.No.</th>
                    <th>Created Date</th>
                    <th>Updated Data</th>
                    <th>Last Login Date</th>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Associate ID</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{isLoading == "loading" ? Get() : <Details />}</tbody>
              </Table>
              <br />
              <Button
                className="float-right"
                variant="danger"
                onClick={() => {
                  alert("To be added.");
                }}
              >
                Delete User
              </Button>
              <Button
                className="float-right"
                variant="warning"
                onClick={() => {
                  alert("To be added.");
                }}
              >
                Deactivate User
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default UserManagement;
