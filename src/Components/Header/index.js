import { Navbar, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { getDocData } from '../../services/firebase'

function Header() {
    const [websiteData , updatewebsiteData] = useState({});
    useEffect(()=>{
        let test = getDocData('amazon');
        test.then((data)=>{
            updatewebsiteData(data);
        }).catch(()=>{
            console.log("Something went wrong")   
        })
    },[]);
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
                    {websiteData.title}
                    </Navbar.Brand>
                </Container>
            </Navbar>   
        </header>
    )
}


export default Header;