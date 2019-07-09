import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { followupAction } from '../../_actions';

function FollowUp(props) {
    const followup = props.followup
    //const followupLink = `/followupDetail/${followup._id}`

    const getBadge = (status) => {
        return status === 'Very High' ? 'success' :
            status === 'High' ? 'success' :
                status === 'Medium' ? 'secondary' :
                    status === 'Low' ? 'warning' :
                        status === 'Not Interested' ? 'danger' :
                            'primary'
    }

    return (
        <tr key={followup._id.toString()}>
            <td>{new Date(followup.followupDate).toLocaleString()}</td>
            <td>{followup.comment}</td>
            <td><Badge color={getBadge(followup.status)}>{followup.status}</Badge></td>
            {/* <td>
                <Link to={followupLink}>
                    <Button size="sm" color="ghost-success" >  <i className="fa fa-pencil fa-lg" color="success" title="Edit"></i></Button>
                    <Button size="sm" color="ghost-danger" ><i className="fa fa-remove fa-lg " color="danger" title="Delete"></i>   </Button>
                </Link>
            </td> */}
        </tr>
    )
}

class FollowUps extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(followupAction.getFollowup());
    }

    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };

    handleClick = (event, id) => {
        console.log(id);
        const { dispatch } = this.props;
        dispatch(followupAction.deleteFollowupById(id))
    };

    render() {

        // const userList = usersData.filter((user) => user.id < 10)
        const { followup: { followup: list } } = this.props;

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Followups <small className="text-muted">list</small>
                            </CardHeader>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Follow Up Date</th>
                                            <th scope="col">Comment</th>
                                            <th scope="col">Status</th>
                                            {/* <th scope="col">Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list && list.map((followup, index) =>
                                            <FollowUp key={index} followup={followup} />
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
        followup: state.followup
    };
}

const connectedFollowupsPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(FollowUps));

export default connectedFollowupsPage;
