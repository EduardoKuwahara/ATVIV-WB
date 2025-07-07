import { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Navbar_ extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm" style={{ backgroundColor: '#343a40' }}>
                <Container fluid>
                    <Navbar.Brand href="/" className="fw-bold">
                        World Beauty
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Início</Nav.Link>
                            <NavDropdown 
                                title="Listagens" 
                                id="listagens-dropdown" 
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                                <NavDropdown.Item href="/servicos">Serviços</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/consumos">Consumos</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown 
                                title="Cadastros" 
                                id="cadastros-dropdown" 
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/cadastrar_cliente">Cliente</NavDropdown.Item>
                                <NavDropdown.Item href="/cadastrar_produto">Produto</NavDropdown.Item>
                                <NavDropdown.Item href="/cadastrar_servico">Serviço</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}