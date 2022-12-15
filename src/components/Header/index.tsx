import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageSelector from '../LanguageSelector';


function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='d-flex justify-content-between align-items-between'>
                <Navbar.Brand href="#home">
                    Boilerplate
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <LanguageSelector />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;