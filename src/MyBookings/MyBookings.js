import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';


const MyBookings = () => {
    const [tours, setTours] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/myBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [user?.email])

    const handleCancel = (id) => {
        fetch(`http://localhost:5000/myBookings/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="marginTop container text-uppercase">
            <h1 className="text-info pt-5">My All Bookings</h1>
            <div className="row my-5 gx-5 gy-2">
                {
                    tours.map(tour => <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={tour?.img} className="w-100" height="100%" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body text-start">
                                        <h5 className="card-title">{tour?.title}</h5>
                                        <p className="card-text"> <span className="me-5 fw-bold text-info"> ${tour?.price}</span> Status: {tour?.status}
                                        </p>
                                        <button onClick={() => handleCancel(tour?._id)} className="btn btn-danger">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyBookings;