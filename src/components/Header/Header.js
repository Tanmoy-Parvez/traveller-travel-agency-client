import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
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
                                <div className="d-flex">
                                    <Nav.Link>
                                        <Link to="/myBookings">My Bookings</Link>
                                        <Link to="/manageBookings">Manage Tours</Link>
                                        <Link to="/add">Add Tour</Link>
                                        <span className="fw-bolder text-success ms-1">{user?.displayName}</span>
                                    </Nav.Link>
                                    <Button onClick={logOut} variant="danger"><i className="fas fa-sign-out-alt"></i></Button>
                                </div>
                                :
                                <Nav.Link>
                                    <Button onClick={handleSignIn} variant="info" className="mx-3 rounded-pill px-4 ">Sign in</Button>
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