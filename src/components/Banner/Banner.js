import React from 'react';
import "./Banner.css"
import logo from '../../images/logo.png'
const Banner = () => {
    return (
        <div className="banner-section d-flex justify-content-center align-items-center">
            <div className="text-box text-white text-uppercase fw-bold animate__animated animate__backInDown">
                <img src={logo} alt="" className="w-25 mb-4" />
                <h1>Feel the freedom to travel </h1>
                <h1>with</h1>
                <h1>Traveller.Com </h1>
            </div>
        </div>
    );
};

export default Banner;