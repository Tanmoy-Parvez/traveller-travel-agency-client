import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import "./Subscribe.css"
const Subscribe = () => {
    return (
        <div className="subscribe-sec px-3 d-flex align-items-center justify-content-center">
            <div>
                <h5 className="text-warning"><i>Get Latest Updates</i></h5>
                <h1 className="text-uppercase text-white">Subscribe Newsletter</h1>
                <Form className="d-flex my-3">
                    <FormControl
                        type="email"
                        placeholder="Enter your email"
                        className="me-1 py-2"
                        aria-label="email"
                    />
                    <Button variant="warning" className="px-3">Subscribe</Button>
                </Form>
                <h6 className="text-light w-75 mx-auto">We will send you every single latest news of our Activities so that you can make next plan.</h6>
                <h6 className="text-warning w-75 mx-auto">Put your email here to let us update you! </h6>
            </div>
        </div >
    );
};

export default Subscribe;