import React from 'react';
import { useHistory } from 'react-router';
import notfoundImg from '../../images/error-img.jpg'


const NotFound = () => {
    const history = useHistory();

    // back to home function
    const handleGoToHome = () => {
        history.push('/home')
    }
    // not found page
    return (
        <div className="text-center marginTop mb-5 px-5">
            <div>
                <img src={notfoundImg} className="img-fluid" alt="" />
            </div>
            <button onClick={handleGoToHome} className="btn btn-outline-dark">Back To Home</button>
        </div>
    );
};

export default NotFound;