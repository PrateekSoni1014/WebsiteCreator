import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function AdminHeader(){
    return(
        <header>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/images/circle-cropped.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                    Websites Creator
                    </Navbar.Brand>
                </Container>
            </Navbar>   
            <Navbar bg="primary" variant='dark'>
                <Container>
                    <Nav>
                        <Nav.Link href='/websiteCreatorAdmin'>Home</Nav.Link>
                    </Nav>                        
                </Container>
            </Navbar>  
        </header>
    )
}

export default AdminHeader;