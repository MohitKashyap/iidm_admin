import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import cs from "classnames";
import Courses from "../../Courses";
import {
    Button,
    Row,
    Table,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import { followupAction, queryAction } from '../../_actions';

class QueryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            success: false,
            courseModal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle = (queryId) => {
        this.setState({
            modal: !this.state.modal,
            queryId: queryId
        });
    }
    courseModalToggle = (queryId) => {
        this.setState({
            courseModal: !this.state.courseModal,
            queryId: queryId
        });
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(queryAction.getQuery());
    }

    handleClick = (event, id) => {
        console.log(id);
        const { dispatch } = this.props;
        dispatch(queryAction.deleteQueryById(id))
    };
    addFollowUp = () => {
        let payload = {
            queryId: this.state.queryId,
            followupDate: this.props.followup.followupDate,
            comment: this.props.followup.comment,
            status: this.props.followup.status
        }
        if (!payload.status) {
            payload.status = "Not Interested";
        }
        if (this.isValid() && this.state.queryId) {
            this.props.dispatch(followupAction.createFollowup(payload, () => {
                this.toggle();
                this.toggleSuccess();
            }));
        }
    }
    toggleSuccess = () => {
        this.setState({
            success: !this.state.success,
        });
    }

    isValid = () => {
        let isValid = true;
        let payload = {
            followupDate: this.props.followup.followupDate,
            comment: this.props.followup.comment,
            status: this.props.followup.status
        };
        if (!payload.followupDate) {
            this.setState({ invalidFollowupDate: true });
            isValid = false;
        }

        return isValid;
    }

    handleChange = prop => event => {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(followupAction.onChangeProps(prop, value));
    }
    updateCourse = () => {
        let payload = {
            id: this.state.queryId,
            course: this.props.query.course,
        }
        if (!payload.course) {
            this.setState({ isValidCourse: this.state.isValidCourse });
        }
        if (this.props.query.course) {
            this.props.dispatch(queryAction.editCourseInfo(payload, () => {
                this.courseModalToggle();
                this.toggleSuccess();
            }));
        }
    }
    handleCourseChange = prop => event => {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(queryAction.onChangeProps(prop, value));
    }
    render() {
        const { registration: { registration: list } } = this.props;
        const QueryRow = (props) => {
            const query = props.query
            const queryLink = `/queryDetail/${query._id}`
            const courseName = Courses.find(
                (item) => {
                    let name = "";
                    if (item.Id === query.course) {
                        name = item.Name;
                    } return name;
                });

            return (
                <tr key={query._id.toString()}>
                    <td><Link to={queryLink}>{query.name}</Link></td>
                    <td>{query.email}</td>
                    <td>{query.mobile}</td>
                    <td>{courseName ? courseName.Name : ""}</td>
                    <td>{query.qualification}</td>
                    <td>{query.gender}</td>
                    <td>{query.address}</td>
                    <td>
                        <Button size="sm" color="ghost-warning" onClick={this.toggle.bind(this, query._id.toString())}>  <i className="fa fa-calendar fa-lg" color="warning" title="FollowUp"></i></Button>
                        <Button size="sm" color="ghost-success" onClick={this.courseModalToggle.bind(this, query._id.toString())}>  <i className="fa fa-plus fa-lg" color="success" title="Add Course"></i></Button>
                        {/* <Link to={queryLink}>
                            <Button size="sm" color="ghost-danger" ><i className="fa fa-remove fa-lg " color="danger" title="Delete"></i>   </Button>
                        </Link> */}
                    </td>
                </tr >
            )
        }

        return (
            <div className="animated fadeIn" >
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Queries <small className="text-muted">list</small>
                            </CardHeader>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Qualification</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list && list.map((query, index) =>
                                            <QueryRow key={index} query={query} />
                                        )}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-lg ' + this.props.className}>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        <ModalHeader toggle={this.toggle}>FollowUp</ModalHeader>
                        <ModalBody>
                            <div className="animated fadeIn">
                                <Row>
                                    <Col xs="12" md="12" sm="12">
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label>Possibility of conversion</Label>
                                            </Col>
                                            <Col md="9">
                                                <FormGroup check inline>
                                                    <Input className="form-check-input" onChange={this.handleChange("status")} type="radio" id="inline-radio1" name="status" value="Very High" />
                                                    <Label className="form-check-label" check htmlFor="inline-radio1">Very High</Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Input className="form-check-input" onChange={this.handleChange("status")} type="radio" id="inline-radio2" name="status" value="High" />
                                                    <Label className="form-check-label" check htmlFor="inline-radio2">High</Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Input className="form-check-input" onChange={this.handleChange("status")} type="radio" id="inline-radio3" name="status" value="Medium" />
                                                    <Label className="form-check-label" check htmlFor="inline-radio3">Medium</Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Input className="form-check-input" onChange={this.handleChange("status")} type="radio" id="inline-radio4" name="status" value="Low" />
                                                    <Label className="form-check-label" check htmlFor="inline-radio4">Low</Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Input className="form-check-input" onChange={this.handleChange("status")} type="radio" id="inline-radio5" name="status" value="Not Interested" />
                                                    <Label className="form-check-label" check htmlFor="inline-radio5">Not Interested</Label>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="dob">Next follow up date </Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                <Input invalid={this.state.invalidFollowupDate ? true : false} className={cs(this.state.invalidFollowupDate ? "form-control-warning" : "")} type="date" onChange={this.handleChange("followupDate")} id="followupDate" name="followupDate" placeholder="Date of birth" required />
                                                {/* <FormFeedback className="help-block">Please provide a valid information</FormFeedback> */}
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="comment">Comment</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                <Input type="textarea" name="comment" id="comment" rows="9"
                                                    placeholder="Content..." onChange={this.handleChange("comment")} />
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="primary" onClick={this.addFollowUp}>Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
                <Modal isOpen={this.state.courseModal} toggle={this.courseModalToggle} className={'modal-lg ' + this.props.className}>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        <ModalHeader toggle={this.toggle}>Add Course</ModalHeader>
                        <ModalBody>
                            <div className="animated fadeIn">
                                <Row>
                                    <Col xs="12" md="12" sm="12">
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="multiple-select">Course</Label>
                                            </Col>
                                            <Col md="9">
                                                <Input type="select" name="course" id="course" multiple onChange={this.handleCourseChange("course")}>
                                                    <option value="1">AUTOCAD</option>
                                                    <option value="2">3DS MAX</option>
                                                    <option value="3">VRAY</option>
                                                    <option value="4">PHOTOSHOP</option>
                                                    <option value="5">GOOGLE SKETCHUP</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="primary" onClick={this.updateCourse}>Add</Button>{' '}
                            <Button color="secondary" onClick={this.courseModalToggle.bind(this)}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
                <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                    className={'modal-success ' + this.props.className}>
                    <ModalHeader toggle={this.toggleSuccess}>Follow up</ModalHeader>
                    <ModalBody>
                        Follow up created successfully.
                  </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleSuccess}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registration: state.registration,
        followup: state.followup,
        query: state.query
    };
}

const connectedRegistrationsPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(QueryList));

export default connectedRegistrationsPage;
