import { Tab , Row, Col, Nav} from "react-bootstrap";
import NavElement from "./navConfig";
import BaseElement from "./baseConfig";

function AdminHome(){
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Site Setting</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Navigation Setting</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <BaseElement />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <NavElement />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default AdminHome;