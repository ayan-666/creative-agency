import React from 'react';
import {Navbar,Nav,Form,Button} from 'react-bootstrap';
import logo from "../../images/logos/logo.png";

const Menu = () => {
    return (
        <div>
            <div className="container p-0">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><img src={logo} style={{"width":"100px"}}/></Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Our Portfolio</Nav.Link>
                    <Nav.Link href="#pricing" className="mr-5">Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button variant="outline-info">Login</Button>
                    </Form>
                </Navbar>
            </div>
        </div>
    );
};

export default Menu;