import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
    const webSiteConfig = useSelector(state => state.setting.webSiteConfig)
    const navElements = webSiteConfig.navElements?.map((navElement, index) => <Nav.Link key={index} href={navElement.path}>{navElement.label}</Nav.Link>)
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
                    {webSiteConfig.title}
                    </Navbar.Brand>
                </Container>
            </Navbar>   
            <Navbar bg="primary" variant='dark'>
                <Container>
                    <Nav>
                        {navElements}
                    </Nav>                        
                </Container>
            </Navbar>  
        </header>
    )
}


export default Header;