import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>Domenicos Pizzas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
                    
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to='/category/menu'>Menú</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to='/category/Promociones'>Promociones</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to='/category/mas vendidos'>Más vendidos</NavDropdown.Item>
                        
                        
                    </NavDropdown>
                </Nav>
                <CartWidget/>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavbarReactBootstrap;