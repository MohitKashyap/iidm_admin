import React, { Component } from 'react';
import { Container, Card, CardBody, CardHeader, Col, Jumbotron, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { queryAction } from '../../_actions';
import { withRouter } from 'react-router-dom';
import Courses from "../../Courses";
class QueryDetail extends Component {
    componentDidMount() {
        const { dispatch, match } = this.props;
        if (match && match.params && match.params.id) {
            dispatch(queryAction.getQueryById(match.params.id));
        }
    }
    printPartOfPage() {
        const elementId = "querydetailpagediv";
        const uniqueIframeId = "queryDetailPage";
        const content = document.getElementById(elementId)
        let pri
        if (document.getElementById(uniqueIframeId)) {
            pri = document.getElementById(uniqueIframeId).contentWindow
        } else {
            const iframe = document.createElement('iframe')
            iframe.setAttribute('title', uniqueIframeId)
            iframe.setAttribute('id', uniqueIframeId)
            iframe.setAttribute('style', 'height: 0px; width: 0px; position: absolute;')
            document.body.appendChild(iframe)
            pri = iframe.contentWindow
        }
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }
    render() {
        const query = this.props.query;
        if (!query.id) {
            return null;
        }
        const course = Courses.find(
            (item) => {
                let name = "";
                if (item.Id === query.course) {
                    name = item.Name;
                } return name;
            });

        return (
            <div className="animated fadeIn" id="querydetailpagediv">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Student Details</strong>
                            </CardHeader>
                            <CardBody>
                                <Jumbotron>
                                    <Col sm="12" md={{ size: 6, offset: 5 }}>
                                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar rounded " alt="admin@bootstrapmaster.com" />
                                    </Col>
                                    <hr />

                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <td className="h6">Name</td>
                                                <td>{query.name}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Email</td>
                                                <td>{query.email}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">mobile</td>
                                                <td>{query.mobile}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Qualification</td>
                                                <td>{query.qualification}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Address</td>
                                                <td>{query.address}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Gender</td>
                                                <td>{query.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Date of birth</td>
                                                <td>{query.dob}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Service</td>
                                                <td>{query.service}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Organisation</td>
                                                <td>{query.organisation}</td>
                                            </tr>
                                            <tr>
                                                <td className="h6">Experience</td>
                                                <td>{query.experience}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Jumbotron>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i>
                                <strong>{course ? course.Name : "Please Select any course"}</strong>
                                <small> {course ? course.ShortName : ""}</small>
                            </CardHeader>
                            <CardBody>
                                {course && <Jumbotron fluid>
                                    <Container fluid>
                                        <Table responsive>
                                            <tbody>
                                                <tr>

                                                    <td className="h6">Duration</td>
                                                    <td>{course.Duration}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Softwares Used</td>
                                                    <td>{course.SoftwaresUsed}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Fee</td>
                                                    <td>{course.BasicFee}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Job Opportunities</td>
                                                    <td>{course.Jobopportunities}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Class Duraction</td>
                                                    <td>{course.ClassDuraction}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Classes in Week</td>
                                                    <td>{course.ClassesinWeek}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Classes in Month</td>
                                                    <td>{course.ClassesinMonth}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Total Classes</td>
                                                    <td>{course.TotalClasses}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h6">Course Content</td>
                                                    <td>{course.CourseContent ? course.CourseContent.map((item) => { return (<div>- {item}</div>); }) : ""}</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    </Container>
                                </Jumbotron>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* <iframe id="queryDetailPage" style ="height: 0px; width: 0px; position: absolute"></iframe> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registration: state.registration,
        followup: state.followup,
        query: state.query
    };
}

const connectedQueryDetailPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(QueryDetail));
export default connectedQueryDetailPage;
