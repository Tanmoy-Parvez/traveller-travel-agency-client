import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'

const SignIn = () => {
    const { googleSignIn } = useAuth();
    // direct access
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="container mb-5" style={{ marginTop: "100px" }}>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 co-12">
                    <div className="border mx-auto shadow-lg py-5">
                        <img src={logo} alt="" className="w-25" />
                        <h4 className="my-3 text-uppercase text-info">Explore More By Sign in</h4>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline-dark rounded-pill w-75"> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25" className="" /> Continue with Google</button>
                        <p className="my-3">Let us help you explore more.</p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default SignIn;