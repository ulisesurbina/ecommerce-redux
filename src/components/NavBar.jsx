import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../images/logo-academlo.png';
import '../App.css'
import ShoppingCart from '../pages/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.setItem("token", "");
        navigate("/login");
    };

    const token = localStorage.getItem("token")

    return (
            <Navbar bg="dark" pd="2rem" variant="dark" expand="lg">
                <Container className='NavBarClass'>
                    <Navbar.Brand href="/#/"><img src={logo} alt='' />Acazon.com.mx</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto SectionNav ButtonShoppingCart">
                            <Nav.Link as={Button} bg="dark" pd="2rem" variant="dark" href="/#/"><i className="fa-solid fa-house"></i> Home</Nav.Link>
                            <Nav.Link href="/#/purchases"><i className="fa-solid fa-basket-shopping"></i> Purchases</Nav.Link>
                            {token ? (
                                <Nav.Link as={Button} bg="dark" pd="2rem" variant="dark" onClick={logOut}><i className="fa-solid fa-right-to-bracket"></i> Log Out</Nav.Link>
                            ) : (
                                <Nav.Link href="/#/login"><i className="fa-solid fa-right-to-bracket"></i> Log In</Nav.Link>
                            )
                            }
                            <Nav.Link><ShoppingCart /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default NavBar;