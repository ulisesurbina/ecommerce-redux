import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo-academlo.png';
import '../App.css'
import ShoppingCart from '../pages/ShoppingCart';

const NavBar = () => { 

    return (
        <Navbar bg="dark" pd="2rem" variant="dark" expand="lg">
            <Container className='NavBarClass'>
                <Navbar.Brand href="/#/"><img src={logo} alt=''/>Acazon.com.mx</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto SectionNav">
                        <Nav.Link href="/#/"><i className="fa-solid fa-house"></i> Home</Nav.Link>
                        <Nav.Link href="/#/purchases"><i className="fa-solid fa-basket-shopping"></i> Purchases</Nav.Link>
                        <Nav.Link href="/#/login"><i className="fa-solid fa-right-to-bracket"></i> Login</Nav.Link>
                        <Nav.Link><ShoppingCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;