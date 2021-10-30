import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';


const MyBookings = () => {
    const [tours, setTours] = useState([]);
    const [cancel, setCancel] = useState(false);
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://traveller-dotcom-server.herokuapp.com/myBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [user?.email, cancel])

    const handleCancel = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel?");
        if (proceed) {
            fetch(`https://traveller-dotcom-server.herokuapp.com/myBookings/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.warn("Booking successfully cancelled!")
                        setCancel(true)
                    };
                })
        }
    }

    return (
        <div className="mt-5 pt-4">
            <h1 className="text-info text-uppercase">My All Bookings</h1>
            <ToastContainer />
            <div className="container">
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
                                            <h5 className="card-title text-uppercase">{tour?.title}</h5>
                                            <h6 className="text-secondary text-uppercase">Booking Date: {tour?.date}</h6>
                                            <h6 className="card-text"> <span className="me-5 fw-bold text-info"> ${tour?.price}</span> Status: <span className="text-danger fw-bold">{tour?.status}</span>
                                            </h6>
                                            <button onClick={() => handleCancel(tour?._id)} className="btn btn-danger">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <div className="py-5 mt-5 bg-info text-center">
                    <h2 className="fw-bolder text-white">“We take photos as a return ticket to a moment otherwise gone” – Katie Thurmes</h2>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;