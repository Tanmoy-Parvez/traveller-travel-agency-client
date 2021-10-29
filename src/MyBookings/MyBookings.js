import React, { useEffect, useState } from 'react';


const MyBookings = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className="marginTop container">
            <h1 className="text-info">My all bookings</h1>
            <div className="row my-5 gx-5 gy-2">
                {
                    tours.map(tour => <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={tour.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body text-start">
                                        <h6 className="card-text">{tour.country}</h6>
                                        <h5 className="card-title">{tour.title}</h5>
                                        <p className="card-text">{tour.duration}  $ {tour.price}</p>
                                        <button className="btn btn-danger">Cancel</button>
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