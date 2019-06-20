import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';

class AddFollowUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>New Follow Up</strong> Form
              </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <FormGroup row>
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
                                        <Col md="3">
                                            <Label htmlFor="comment">Comment</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="textarea" name="comment" id="comment" rows="9"
                                                placeholder="Content..." />
                                        </Col>
                                    </FormGroup>
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

export default AddFollowUp;
