import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { registrationAction } from '../../_actions';

function UserRow(props) {
    const user = props.user
    const userLink = `/registrationDetail/${user._id}`

    const getBadge = (status) => {
        return status === 'Active' ? 'success' :
            status === 'Inactive' ? 'secondary' :
                status === 'Pending' ? 'warning' :
                    status === 'Banned' ? 'danger' :
                        'primary'
    }

    return (
        <tr key={user._id.toString()}>
            <td><Link to={userLink}>{user.name}</Link></td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
        </tr>
    )
}

class Registrations extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(registrationAction.getRegistration());
    }

    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };

    handleClick = (event, id) => {
        console.log(id);
        const { dispatch } = this.props;
        dispatch(registrationAction.deleteRegistrationById(id))
    };

    render() {

        // const userList = usersData.filter((user) => user.id < 10)
        const { registration: { registration: list } } = this.props;

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Registrations <small className="text-muted">list</small>
                            </CardHeader>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list && list.map((user, index) =>
                                            <UserRow key={index} user={user} />
                                        )}
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

const connectedRegistrationsPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(Registrations));

export default connectedRegistrationsPage;
