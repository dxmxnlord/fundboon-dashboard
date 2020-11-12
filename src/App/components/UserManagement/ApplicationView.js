import React, { useState } from "react";
import { Form, Card, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import FuzzySearch from "fuzzy-search";
import { useClient } from "../../../client";
import { useCookies } from "react-cookie";
import { GET_ALL_APPLICATIONS_QUERY } from "../../../graphql/queries";
const Applications = () => {
  const client = useClient();
  const [cookies, removeCookie] = useCookies(["user"]);
  const [application, setApplication] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState("loading");
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
          <td scope="row"> {i + 1}</td>
          <td> {dateString}</td>
          <td> {application[i].applicationNumber} </td>
          <td> {application[i].type}</td>
          <td> {application[i].applicantId} </td>
          <td> {i + 1000}</td>
          <td> {i * 100000}</td>
          <td> bank {i}</td>
          <td> {application[i].reviewStatus}</td>
          <td> FBrep {i}</td>
          <td>
            {" "}
            <Button>View</Button>
          </td>
        </tr>
      );
    }
    return card;
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Appl.Date</th>
                <th>Appl.#</th>
                <th>Product Type</th>
                <th>Customer Name</th>
                <th>Associate ID</th>
                <th>Loan Amount</th>
                <th>Bank Name</th>
                <th>Status</th>
                <th>FB Rep</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{isLoading == "loading" ? Get() : <Details />}</tbody>
          </Table>
          <br />
        </Card.Body>
      </Card>
    </>
  );
};

export default Applications;
