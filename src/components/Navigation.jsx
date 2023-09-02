import '../style/Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// navigation component
const Navigation = () => {
    return (
        // bootstrap navbar
        <Navbar variant='dark' expand="lg" className='mainMenu'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/About' className='fs-5 nav-link-highlight shadow-lg'>About Me</Nav.Link>
                        <Nav.Link as={Link} to='/Portfolio' className='fs-5 nav-link-highlight shadow-lg'>Portfolio</Nav.Link>
                        <Nav.Link as={Link} to='/Contact' className='fs-5 nav-link-highlight shadow-lg'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/Resume' className='fs-5 nav-link-highlight shadow-lg'>Resume</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
                        )
                    };

                    // export Navigation component
                    export default Navigation;