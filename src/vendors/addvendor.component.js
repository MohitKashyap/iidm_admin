import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { vendorAction } from '../_actions';
import { withRouter } from 'react-router-dom';
import DemoNavbar from '../Navbars/DemoNavbar';
import ReactDatetime from "react-datetime";
import cs from "classnames";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroup,
    Container,
    Modal,
    InputGroupText,
    InputGroupAddon,
    Row,
    Col
} from "reactstrap";
class AddVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWorking: false,
            invalidName: false,
            invalidMobile: false,
            invalidEmail: false
        };
    }

    handleChange = prop => event => {
        const { dispatch } = this.props;
        const value = event.target.value;
        if (prop === "name" && value) {
            this.setState({ invalidName: false });
        } else if (prop === "email" && value) {
            this.setState({ invalidEmail: false });
        } else if (prop === "mobile" && value) {
            this.setState({ invalidMobile: false });
        }
        dispatch(vendorAction.onChangeProps(prop, value));
    };
    handleDate = prop => event => {
        const dob = new Date(event).toString();
        const { dispatch } = this.props;
        dispatch(vendorAction.onChangeProps(prop, dob));
    }
    componentDidMount() {
        const { match: { params } } = this.props;

        if (params.id) {
            const { dispatch } = this.props;
            dispatch(vendorAction.getVendorById(params.id));
        }
    }
    handleClick(event) {
        const { match: { params } } = this.props;
        const { dispatch } = this.props;
        let payload = {
            name: this.props.vendor.name,
            mobile: this.props.vendor.mobile,
            email: this.props.vendor.email,
            address: this.props.vendor.address,
            gender: this.props.vendor.gender,
            dob: this.props.vendor.dob,
            qualification: this.props.vendor.qualification,
            working: this.props.vendor.working,
            service: this.props.vendor.service,
            organisation: this.props.vendor.organisation,
            experience: this.props.vendor.experience,
        }
        if (this.isValid()) {
            if (params.id) {
                dispatch(vendorAction.editVendorInfo(params.id, payload));
            } else {
                dispatch(vendorAction.createVendor(payload, () => {
                    this.clearForm();
                    this.toggleModal("notificationModal");
                }));
            }
        }
    }
    clearForm = () => {
        const { dispatch } = this.props;
        dispatch(vendorAction.onChangeProps("name", ""));
        dispatch(vendorAction.onChangeProps("mobile", ""));
        dispatch(vendorAction.onChangeProps("email", ""));
        dispatch(vendorAction.onChangeProps("address", ""));
        dispatch(vendorAction.onChangeProps("gender", ""));
        dispatch(vendorAction.onChangeProps("dob", ""));
        dispatch(vendorAction.onChangeProps("qualification", ""));
        dispatch(vendorAction.onChangeProps("working", ""));
        dispatch(vendorAction.onChangeProps("service", ""));
        dispatch(vendorAction.onChangeProps("organisation", ""));
        dispatch(vendorAction.onChangeProps("experience", ""));
        this.setState({ isValid: true });
    }
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
        this.clearForm();

    };
    isValid = () => {
        let isValid = true;
        let payload = {
            name: this.props.vendor.name,
            mobile: this.props.vendor.mobile,
            email: this.props.vendor.email,
            address: this.props.vendor.address,
            gender: this.props.vendor.gender,
            dob: this.props.vendor.dob,
            qualification: this.props.vendor.qualification,
            working: this.props.vendor.working,
            service: this.props.vendor.service,
            organisation: this.props.vendor.organisation,
            experience: this.props.vendor.experience,
        }

        if (!payload.name) {
            this.setState({ invalidName: true });
            isValid = false;
        }
        if (!payload.mobile && !(payload && payload.mobile.length >= 10 && payload.mobile.length <= 13)) {
            this.setState({ invalidMobile: true });
            isValid = false;
        }
        if (payload.email) {
            if (!payload.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                this.setState({ invalidEmail: true });
                isValid = false;
            }
        } else {
            this.setState({ invalidEmail: true });
            isValid = false;
        }

        return isValid;
    }
    isWorking = prop => event => {
        this.setState({ isWorking: event.target.value }, () => { this.handleChange(prop, event); });
    };

    render() {
        return (
            <React.Fragment>
                <DemoNavbar />
                <main ref="main">
                    <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <Container className="pt-lg-md">
                            <Row className="justify-content-center">
                                <Col lg="8">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardHeader className="bg-white pb-8">
                                            <div className="text-muted text-center mb-3">
                                                <medium>GET IN TOUCH</medium>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-lg-5 py-lg-5">
                                            <Form role="form" >
                                                <FormGroup className={cs(this.state.invalidName ? "has-danger" : "")}>
                                                    <InputGroup className="input-group-alternative mb-3">
                                                        <Input
                                                            className={this.state.invalidName ? "is-invalid" : "is-valid"}
                                                            placeholder="Name"
                                                            type="text"
                                                            name="name"
                                                            value={this.props.vendor.name}
                                                            onChange={this.handleChange('name')}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className={cs(this.state.invalidEmail ? "has-danger" : "")}>
                                                    <InputGroup className="input-group-alternative mb-3">
                                                        <Input
                                                            className={this.state.invalidEmail ? "is-invalid" : "is-valid"}
                                                            placeholder="Email"
                                                            type="email"
                                                            name="email"
                                                            value={this.props.vendor.email}
                                                            onChange={this.handleChange('email')} />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className={cs(this.state.invalidMobile ? "has-danger" : "")}>
                                                    <InputGroup className="input-group-alternative">
                                                        <Input
                                                            className={this.state.invalidMobile ? "is-invalid" : "is-valid"}
                                                            placeholder="Mobile"
                                                            type="text"
                                                            name="mobile"
                                                            value={this.props.vendor.mobile}
                                                            onChange={this.handleChange('mobile')}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <InputGroup className="input-group-alternative mb-3">
                                                        <Input
                                                            placeholder="Address"
                                                            type="text"
                                                            value={this.props.vendor.address}
                                                            onChange={this.handleChange('address')}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-calendar-grid-58" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <ReactDatetime
                                                            inputProps={{
                                                                placeholder: "Date of birth"
                                                            }}
                                                            timeFormat={false}
                                                            value={this.props.vendor.dob}
                                                            onChange={this.handleDate('dob')}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <InputGroup className="input-group-alternative mb-3">
                                                        <Input
                                                            placeholder="Qualification"
                                                            type="text"
                                                            value={this.props.vendor.qualification}
                                                            onChange={this.handleChange('qualification')} />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Row>
                                                        <Col sm="6">
                                                            <div className="custom-control custom-radio mb-3">
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <label htmlFor="gender">Gender</label>
                                                                </div>
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <input
                                                                        className="custom-control-input"
                                                                        id="customRadio5"
                                                                        name="gender"
                                                                        type="radio"
                                                                        value="Male"
                                                                        onChange={this.handleChange('gender')}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="customRadio5">
                                                                        Male
                                                                  </label>
                                                                </div>
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <input
                                                                        className="custom-control-input"
                                                                        id="customRadio6"
                                                                        name="gender"
                                                                        type="radio"
                                                                        value="Female"
                                                                        onChange={this.handleChange('gender')}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="customRadio6">
                                                                        Female
          </label>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col sm="6">
                                                            <div className="custom-control custom-radio mb-3">
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <label htmlFor="working">Working</label>
                                                                </div>
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <input
                                                                        className="custom-control-input"
                                                                        id="customRadio3"
                                                                        name="working"
                                                                        type="radio"
                                                                        value={true}
                                                                        onChange={this.isWorking('working')}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="customRadio3">
                                                                        Yes
                                                                    </label>
                                                                </div>
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <input
                                                                        className="custom-control-input"
                                                                        id="customRadio4"
                                                                        name="working"
                                                                        type="radio"
                                                                        value={false}
                                                                        onChange={this.isWorking('working')}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="customRadio4">
                                                                        No
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                {this.state.isWorking === "true" ?
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative mb-3">
                                                            <Input
                                                                placeholder="Organization"
                                                                type="text"
                                                                value={this.props.vendor.organisation}
                                                                onChange={this.handleChange('organisation')} />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    : null
                                                }
                                                {
                                                    this.state.isWorking === "true" ?
                                                        <FormGroup>
                                                            <InputGroup className="input-group-alternative mb-3">
                                                                <Input
                                                                    placeholder="Service"
                                                                    type="text"
                                                                    value={this.props.vendor.service}
                                                                    onChange={this.handleChange('service')} />
                                                            </InputGroup>
                                                        </FormGroup> : null
                                                }
                                                {this.state.isWorking === "true" ?
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative mb-3">
                                                            <Input
                                                                placeholder="Experience"
                                                                type="text"
                                                                value={this.props.vendor.experience}
                                                                onChange={this.handleChange('experience')} />
                                                        </InputGroup>
                                                    </FormGroup> : null
                                                }
                                                <div className="text-center">
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        type="button"
                                                        onClick={(event) => this.handleClick(event)}
                                                    >
                                                        Submit
                          </Button>
                                                </div>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <SimpleFooter />
                <Modal
                    className="modal-dialog-centered modal-danger"
                    contentClassName="bg-gradient-danger"
                    isOpen={this.state.notificationModal}
                    toggle={() => this.toggleModal("notificationModal")}
                >
                    <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-notification">
                            IIDS
                </h6>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="py-3 text-center">
                            <i className="ni ni-bell-55 ni-3x" />
                            <h4 className="heading mt-4">Thanks for your intrest.</h4>
                            <p>
                                Our counsellor will reach you soon for further process.
                  </p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button
                            className="text-white ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                        >
                            Close
                </Button>
                    </div>
                </Modal>
            </React.Fragment >
        );
    }
}

//export default Home;

AddVendor.propTypes = {
    classes: PropTypes.object,
};


//export default BoxCon
const mapStateToProps = (state) => {
    return state;
}


const connectedAddVendorPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(AddVendor));

export { connectedAddVendorPage as AddVendor };