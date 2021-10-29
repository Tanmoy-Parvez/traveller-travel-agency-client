import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png'
import "./Header.css"

const Header = () => {
    // const { user, logOut } = useAuth(); // context api
    const history = useHistory();

    // change route options
    const handleSignIn = () => {
        history.push("/signIn")
    }

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
                        <Nav className="ms-auto">
                            <Nav.Item class="d-flex align-items-center navbar-item">
                                <Nav.Link>
                                    <Link to="/home">Home</Link>
                                    <Button onClick={handleSignIn} variant="info" className="mx-3 rounded-pill px-4 ">Sign in</Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/home">My Bookings</Link>
                                    <Link to="/home">Manage Tours</Link>
                                    <Link to="/home">Add Tour</Link>
                                    <span className="fw-bolder ms-3">User Name</span>
                                </Nav.Link>
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