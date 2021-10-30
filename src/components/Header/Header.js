import React from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
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
            <Navbar collapseOnSelect expand="lg" className="fixed-top bg-light px-4">
                {/* logo and title */}
                <Navbar.Brand className="d-flex" href="" onClick={handleNavbarBand}>
                    <img
                        src={logo}
                        width="50"
                        height="45"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <h2 className="fw-bold ms-1 text-info ">Traveller.Com</h2>
                </Navbar.Brand>
                {/* menu options */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-uppercase">
                        <Nav.Item className="d-flex align-items-center navbar-item">
                            <Link to="/home">Home</Link>
                            {user?.email ?
                                <div className="d-flex align-items-center text-info">
                                    <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                        <NavDropdown.Item className="bg-light">
                                            <Link to="/myBookings">My Bookings</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="bg-light">
                                            <Link to="/manageBookings">Manage Tours</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="bg-light">
                                            <Link to="/add">Add Tour</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <span className="fw-bolder text-danger me-3">
                                        {user?.displayName}
                                    </span>
                                    <Button onClick={logOut} variant="danger">
                                        <i className="fas fa-sign-out-alt"></i>
                                    </Button>
                                </div>
                                :
                                <Nav.Link>
                                    <Button onClick={handleSignIn} variant="info" className="rounded-pill px-4 text-white">
                                        Sign in
                                    </Button>
                                </Nav.Link>
                            }
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;