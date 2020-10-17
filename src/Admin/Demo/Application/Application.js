import React, { useState } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import classNames from 'classnames';

import Swal from 'sweetalert2';
import FuzzySearch from 'fuzzy-search';
import { useClient } from '../../../client';
import { useCookies } from 'react-cookie';
import { GET_ALL_APPLICATIONS_QUERY } from '../../../graphql/queries';

import Aux from "../../hoc/_Aux";

const BootstrapTable = () =>  {
    const client = useClient();
    const [cookies, removeCookie] = useCookies(['user']);
    const [application, setApplication] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setLoading] = useState('loading');
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
        card.push(
        <tr>
            <td scope="row">
            {' '}
            {i + 1}
            </td>

            <td>
            {' '}
            {application[i].applicantId}{' '}
            </td>
            <td>
            {' '}
            {application[i].applicationNumber}{' '}
            </td>
            <td>
            {' '}
            {application[i].policyId}
            </td>
            <td>
            {' '}
            {application[i].type}
            </td>
            <td>
            {' '}
            {dateString}
            </td>
            <td>
            {' '}
            {application[i].reviewStatus}
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
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Applicant ID</th>
                                        <th>Application Number</th>
                                        <th>Policy ID</th>
                                        <th>Type</th>
                                        <th>Applied At</th>
                                        <th>Review Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {isLoading == 'loading' ? Get() : <Details />}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }

export default BootstrapTable;