import React, { Component } from 'react';
import {
    // Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    // Collapse,
    // DropdownItem,
    // DropdownMenu,
    // DropdownToggle,
    // Fade,
    Form,
    FormGroup,
    // FormText,
    // FormFeedback,
    Input,
    // InputGroup,
    // InputGroupAddon,
    // InputGroupButtonDropdown,
    // InputGroupText,
    Label,
    Row,
} from 'reactstrap';

class Forms extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>New Registration</strong> Form
              </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="name">Name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="name" name="name" placeholder="Enter your name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="email">Email</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="email" id="email" name="email" placeholder="Enter your email" autoComplete="email" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="mobile">Mobile Number</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="mobile" name="mobile" placeholder="Enter your mobile number" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="dob">Date of birth </Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="date" id="dob" name="dob" placeholder="Date of birth" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="address-input">Address</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="address-input" name="address-input" placeholder="Enter your address" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="qualification">Qualification</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="qualification" name="qualification-input" placeholder="Enter qualification" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="organization">Organization</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="organization" name="organization" placeholder="Enter your organization" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="service">Service</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="service" name="service" placeholder="Enter your service" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="experience">Experience</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="experience" name="experience" placeholder="Enter your experience" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="select">Gender</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="select" id="select">
                                                <option value="0">Please select</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Other</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="multiple-select">Course</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input type="select" name="multiple-select" id="multiple-select" multiple>
                                                <option value="1">AUTOCAD</option>
                                                <option value="2">3DS MAX</option>
                                                <option value="3">VRAY</option>
                                                <option value="4">PHOTOSHOP</option>
                                                <option value="5">GOOGLE SKETCHUP</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="comment">Comment</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="textarea" name="comment" id="comment" rows="9"
                                                placeholder="Content..." />
                                        </Col>
                                    </FormGroup>
                                    {/* <FormGroup row>
                                        <Col md="3">
                                            <Label>Possibility of conversion</Label>
                                        </Col>
                                        <Col md="9">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                                <Label className="form-check-label" check htmlFor="inline-radio1">Very High</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                                <Label className="form-check-label" check htmlFor="inline-radio2">Two</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                                                <Label className="form-check-label" check htmlFor="inline-radio3">Medium</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio4" name="inline-radios" value="option3" />
                                                <Label className="form-check-label" check htmlFor="inline-radio4">Low</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio5" name="inline-radios" value="option3" />
                                                <Label className="form-check-label" check htmlFor="inline-radio5">Not Interested</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="dob">Next follow up date </Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="date" id="followup" name="followup" placeholder="Date of birth" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3"><Label>Checkboxes</Label></Col>
                                        <Col md="9">
                                            <FormGroup check className="checkbox">
                                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                                <Label check className="form-check-label" htmlFor="checkbox1">Option 1</Label>
                                            </FormGroup>
                                            <FormGroup check className="checkbox">
                                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                                <Label check className="form-check-label" htmlFor="checkbox2">Option 2</Label>
                                            </FormGroup>
                                            <FormGroup check className="checkbox">
                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                                <Label check className="form-check-label" htmlFor="checkbox3">Option 3</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Inline Checkboxes</Label>
                                        </Col>
                                        <Col md="9">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                                                <Label className="form-check-label" check htmlFor="inline-checkbox1">One</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                                                <Label className="form-check-label" check htmlFor="inline-checkbox2">Two</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                                                <Label className="form-check-label" check htmlFor="inline-checkbox3">Three</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="file-input">File input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="file" id="file-input" name="file-input" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="file-multiple-input">Multiple File input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                                        </Col>
                                    </FormGroup> */}
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Forms;
