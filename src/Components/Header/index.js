import { Navbar, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
    const webSiteConfig = useSelector(state => state.homePage.webSiteConfig)

    return(
        <header>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/images/mainLogo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                    {webSiteConfig.title}
                    </Navbar.Brand>
                </Container>
            </Navbar>   
        </header>
    )
}


export default Header;