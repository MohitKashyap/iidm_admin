import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { registrationAction } from '../../_actions';
import { withRouter } from 'react-router-dom';
class RegistrationDetail extends Component {

    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(registrationAction.getRegistrationById(match.params.id));
    }

    render() {
        const { registration } = this.props;

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
                            </CardHeader>
                            <CardBody>
                                <Table responsive striped hover>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td><strong>{registration.name}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td><strong>{registration.email}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Mobile</td>
                                            <td><strong>{registration.mobile}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Qualification</td>
                                            <td><strong>{registration.qualification}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td><strong>{registration.dob}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td><strong>{registration.gender}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td><strong>{registration.address}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Organisation</td>
                                            <td><strong>{registration.organisation}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Service</td>
                                            <td><strong>{registration.service}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Experience</td>
                                            <td><strong>{registration.service}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Created on</td>
                                            <td><strong>{registration.createdAt}</strong></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registration: state.registration
    };
}

const connectedRegistrationDetail = withRouter(connect(mapStateToProps,
    null,
    null,
    {
        pure: false
    })(RegistrationDetail));

export default connectedRegistrationDetail;
// export default RegistrationDetail;
