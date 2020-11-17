import React, { useState } from 'react';
import {Row, Col, Card, Table, Form, Button, InputGroup, FormControl, Modal} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import classNames from 'classnames';

import Swal from 'sweetalert2';
import FuzzySearch from 'fuzzy-search';
import { useClient } from '../../../client';
import { useCookies } from 'react-cookie';
import { GET_ALL_APPLICATIONS_QUERY } from '../../../graphql/queries';
import ViewApplication from "./ViewApplication";

import Aux from "../../../Admin/hoc/_Aux";
import { ContactSupportOutlined } from '@material-ui/icons';

var applications = [];

const BootstrapTable = () =>  {
    const client = useClient();
    const [cookies, removeCookie] = useCookies(['user']);
    const [application, setApplication] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setLoading] = useState('loading');
    const [show, setShow] = useState(false);
    const [showView, setShowView] = useState(false);
    const [applicationId, setApplicationId] = useState('');


    const handleCloseShow = () => {
        setShowView(false);
        setApplicationId('');
    }
    const handleShowView = (event, value) => {
        setShowView(true);
        setApplicationId(value);
    }
    

    const getApplicationsRequest = async e => {
    try {
        const application = await client.request(GET_ALL_APPLICATIONS_QUERY);

        setApplication(application.getAllApplicationsRequest);
        console.log(application);
        setLoading('');
    } catch (err) {
        console.log(err);
        setLoading('');
    }
    };
    const Get = () => {
    if (isLoading == 'loading') getApplicationsRequest();
    };
    const Details = () => {
    const card = [];
    
    for (let i = 0; i < application.length; i++) {
        var theDate = new Date(application[i].appliedAt/1);
        var dateString = theDate.toGMTString();

        var data = {};
        data['firstName'] = application[i].personalDetails.firstName;
        data['lastName'] = application[i].personalDetails.lastName;
        data['mob'] = application[i].personalDetails.mob;
        data['dob'] = dateString;
        data['gender'] = application[i].personalDetails.gender;
        data['pan'] = application[i].personalDetails.pan;
        data['aadhaar'] = application[i].personalDetails.aadhaar;
        data['nation'] = application[i].personalDetails.nation;
        data['primaryEmail'] = application[i].personalDetails.primaryEmail;
        data['secondaryEmail'] = application[i].personalDetails.secondaryEmail;
        data['qualification'] = application[i].personalDetails.qualification;
        data['maritalStatus'] = application[i].personalDetails.maritalStatus;


        data['permanentAddress'] = application[i].addressDetails.permanentAddress;
        data['permanentAddressLandmark'] = application[i].addressDetails.permanentAddressLandmark;
        data['permanentAddressType'] = application[i].addressDetails.permanentAddressType;
        data['permanentAddressPincode'] = application[i].addressDetails.permanentAddressPincode;
        data['permanentAddressPincodeCity'] = application[i].addressDetails.permanentAddressPincodeCity;
        data['permanentAddressPincodeState'] = application[i].addressDetails.permanentAddressPincodeState;
        data['permanentAddressAccomodation'] = application[i].addressDetails.permanentAddressAccomodation;
        data['currentAddress'] = application[i].addressDetails.currentAddress;
        data['currentAddressLandmark'] = application[i].addressDetails.currentAddressLandmark;
        data['currentAddressType'] = application[i].addressDetails.currentAddressType;
        data['currentAddressPincode'] = application[i].addressDetails.currentAddressPincode;
        data['currentAddressPincodeCity'] = application[i].addressDetails.currentAddressPincodeCity;
        data['currentAddressPincodeState'] = application[i].addressDetails.currentAddressPincodeState;
        data['currentAddressAccomodation'] = application[i].addressDetails.currentAddressAccomodation;


        data['emp'] = application[i].employmentDetails.emp;
        data['income'] = application[i].employmentDetails.income;
        data['company'] = application[i].employmentDetails.company;
        data['turnover'] = application[i].employmentDetails.turnover;
        data['officeAddress'] = application[i].employmentDetails.officeAddress;
        data['officeAddressLandmark'] = application[i].employmentDetails.officeAddressLandmark;
        data['officeAddressPincode'] = application[i].employmentDetails.officeAddressPincode;
        data['industryType'] = application[i].employmentDetails.industryType;


        data['loanAmount'] = application[i].loanDetails.loanAmount;
        data['loanCity'] = application[i].loanDetails.loanCity;
        data['loanTenure'] = application[i].loanDetails.loanTenure;
        data['loanPurpose'] = application[i].loanDetails.loanPurpose;
        data['assetWorth'] = application[i].loanDetails.assetWorth;
        data['assetCity'] = application[i].loanDetails.assetCity;
        data['assetState'] = application[i].loanDetails.assetState;
        data['assetType'] = application[i].loanDetails.assetType;
        data['homeLoanCity'] = application[i].loanDetails.homeLoanCity;


        data['coApplicant'] = application[i].bankDetails.coApplicant;
        data['coApplicantIncome'] = application[i].bankDetails.coApplicantIncome;
        data['coApplicantEMI'] = application[i].bankDetails.coApplicantEMI;
        data['coApplicantRelation'] = application[i].bankDetails.coApplicantRelation;
        data['exiloan'] = application[i].bankDetails.exiloan;
        data['exiLoanBank'] = application[i].bankDetails.exiLoanBank;
        data['exiEMI'] = application[i].bankDetails.exiEMI;
        data['chqbnc'] = application[i].bankDetails.chqbnc;
        data['exiLoanType'] = application[i].bankDetails.exiLoanType;
        data['transfer'] = application[i].bankDetails.transfer;

        applications.push(data);

        card.push(
        <tr>
            <td>
            <input className="form-control" type="checkbox" />
            </td>
            <td scope="row">
            {' '}
            {i + 1}
            </td>
            <td>
            {' '}
            {dateString}
            </td>
            <td>
            {' '}
            {dateString}
            </td>
            <td>
            {' '}
            {application[i].applicationNumber}{' '}
            </td>
            <td>
            {' '}
            {application[i].type}
            </td>
            <td>
            {' '}
            {application[i].personalDetails.firstName}{' '}{application[i].personalDetails.lastName}{' '}
            </td>
            <td>
            {' '}
            {i+1000}
            </td>
            <td>
            {' '}
            {application[i].loanDetails.loanAmount}{' '}
            </td>
            <td>
            {' '}
            {application[i].bankName}{' '}
            </td>
            <td>
            {' '}
            {application[i].reviewStatus}
            </td>
            <td>
            {' '}
            FBrep {i}
            </td>
            <td>
            {' '}
            <Button onClick={(event) => handleShowView(event, i)}>View</Button>
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
                            
                                <Card.Title as="h5">Application Management</Card.Title>
                                <span className="d-block m-t-5">Easily manage applications here.</span>
                                <ReactHTMLTableToExcel
                                className="float-right btn btn-success"
                                table="table-to-xls"
                                filename="fundboon-applications"
                                sheet="fundboon-applications"
                                buttonText="Download as Excel"/>
                                <Button className="float-right" variant="secondary" onClick={() => {alert('To be added.')}}>New Application</Button> 
                                <Col md={4} className="float-right">
                                    <Form.Control type="text" placeholder="Search" className="mb-3" />
                                </Col>
                            </Card.Header>
                            <Card.Body>

                            <Modal show={showView} onHide={handleCloseShow} size="lg">
                                <Modal.Header closeButton>
                                <Modal.Title>View Application</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <ViewApplication {...applications[applicationId]} />
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseShow}>
                                    Close
                                </Button>
                                </Modal.Footer>
                            </Modal>

                                <Table responsive hover id="table-to-xls">
                                    <thead>
                                    <tr>
                                        <th>Select</th>
                                        <th>Sr.No.</th>
                                        <th>Applied Date</th>
                                        <th>Updated Date</th>
                                        <th>Application Number</th>
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
                                    <tbody>
                                    {isLoading == 'loading' ? Get() : <Details />}
                                    </tbody>
                                </Table>
                                <br />
                                <Button className="float-right" variant="danger" onClick={() => {alert('To be added.')}}>Delete</Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }

export default BootstrapTable;