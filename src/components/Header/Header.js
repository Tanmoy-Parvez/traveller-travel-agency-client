import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth(); // context api
    const history = useHistory();

    // change route options
    const handleSignIn = () => {
        history.push("/signIn")
    }

    const handleNavbarBand = () => {
        history.push("/home")
    }
    // navigation menu bar
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="fixed-top bg-light">
                <Container>
                    {/* logo and title */}
                    <Navbar.Brand className="d-flex" href="" onClick={handleNavbarBand}>
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
                            <Nav.Item className="d-flex align-items-center navbar-item">
                                {user?.email ?
                                    <div className="d-flex">
                                        <Nav.Link>
                                            <Link to="/home">My Bookings</Link>
                                            <Link to="/home">Manage Tours</Link>
                                            <Link to="/add">Add Tour</Link>
                                            <span className="fw-bolder text-success ms-1">{user?.displayName}</span>
                                        </Nav.Link>
                                        <Button onClick={logOut} variant="danger"><i className="fas fa-sign-out-alt"></i></Button>
                                    </div>
                                    :
                                    <Nav.Link>
                                        <Link to="/home">Home</Link>
                                        <Button onClick={handleSignIn} variant="info" className="mx-3 rounded-pill px-4 ">Sign in</Button>
                                    </Nav.Link>
                                }
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;