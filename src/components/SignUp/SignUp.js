import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const SignUp = () => {
    // const { googleSignIn } = useAuth();
    // // direct access
    // const history = useHistory();
    // const location = useLocation();
    // const redirect_url = location.state?.from || '/home';

    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then((result) => {
    //             history.push(redirect_url);
    //         })
    // }
    return (
        <div className="container mb-5" style={{ marginTop: "100px" }}>
            <div className="w-50 mt-5 border mx-auto shadow-lg py-5">
                <img src={logo} alt="" className="w-25" />
                <h3 className="my-3">Sign up With</h3>
                <button className="btn btn-outline-dark rounded-pill w-75"> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25" className="" /> Continue with Google</button>
                <p className="my-3">Alreay have an account? <Link to="/signIn" style={{ textDecoration: "none" }}>Sign in</Link></p>
            </div>
        </div>
    );
};

export default SignUp;