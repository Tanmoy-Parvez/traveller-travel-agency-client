import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    // footer section
    return (
        <div className="footer-container bg-dark text-light pb-2 pt-5 overflow-hidden">
            <div className="row">
                <div className="col-md-2 col-12 px-5">
                    <img src={logo} className="img-fluid" alt="" />
                </div>
                {/* location info */}
                <div className="col-md-4 col-12 text-start ps-5">
                    <h4 className="text-uppercase">
                        Traveller.Com
                    </h4>
                    <h6 className="fw-normal">AR Tower 2nd Floor, Dhaka, Bangladesh.</h6>
                    <h6 className="fw-normal">Official: tc@gmail.com</h6>
                    <h6 className="fw-normal">(Available : 09:00am to 10:00pm)</h6>
                </div>
                {/* some links */}
                <div className="col-md-2 col-12 nav-item text-start">
                    <h4 className="text-uppercase">Know More</h4>
                    <h6><Link to="/home">Home</Link></h6>
                    <h6><Link to="/login">Login</Link></h6>
                    <h6><Link to="/register">Register</Link></h6>
                    <h6><Link to="/news">Travel News</Link></h6>
                </div>
                <div className="col-md-4 col-12 text-start ps-5">
                    <h3 className="text-uppercase">Have Questions ?</h3>
                    <h5 className="text-info">+88013-111-2233</h5>
                    <h5 className="text-info">Support@tc.com</h5>
                    <p className="mt-3">Dedicated customer support</p>
                </div>
            </div>
            <hr />
            {/* copyright */}
            <p className="text-center text-secondary">&copy; Copyright 2021 || All rights reserved by Traveller.Com</p>
        </div>
    );
};

export default Footer;