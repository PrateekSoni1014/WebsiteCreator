import { Form } from "react-bootstrap";

function NavElement(){
    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="forTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
            </Form>
        </div>
    )
}
export default NavElement;