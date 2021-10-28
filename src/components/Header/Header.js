import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import "./Header.css"

const Header = () => {
    // const { user, logOut } = useAuth(); // context api
    // const history = useHistory();

    // // change route options
    // const handleLogIn = () => {
    //     history.push("/login")
    // }

    // const handleSignUp = () => {
    //     history.push("/signup")
    // }

    // const handleNavbarBand = () => {
    //     history.push("/home")
    // }
    // // navigation menu bar
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="fixed-top bg-light">
                <Container>
                    {/* logo and title */}
                    <Navbar.Brand className="d-flex" href="">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h2 className="fw-normal ms-1">Traveller.Com</h2>
                    </Navbar.Brand>
                    {/* menu options */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navbar-item">
                            <Nav.Item className="nav-item">
                                <Nav.Link>
                                    <Link to="/home">Home</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <span className="fw-bolder ms-3">User Name</span>
                                <Button variant="danger" className="mx-3 rounded-pill px-4 ">Log Out <i className="fas fa-sign-out-alt"></i></Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;