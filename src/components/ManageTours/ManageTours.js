import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageTours = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [cancel, setCancel] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch("https://traveller-dotcom-server.herokuapp.com/allBookings")
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [cancel, updated])

    // handle cancel booking function
    const handleCancel = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel?");
        if (proceed) {
            fetch(`https://traveller-dotcom-server.herokuapp.com/allBookings/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Booking successfully cancelled!")
                        setCancel(!cancel)
                    };
                })
        }
    }

    // update status
    const [tour, setTour] = useState({});
    // handle update status function
    const handleApproved = (id) => {
        fetch(`https://traveller-dotcom-server.herokuapp.com/allBookings/${id}`)
            .then((res) => res.json())
            .then((data) => setTour(data));
        setTour(tour.status = "Approved");

        fetch(`https://traveller-dotcom-server.herokuapp.com/allBookings/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tour),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Booking Approved successfully!");
                    setUpdated(!updated)
                }
            });
    }
    // manage all bookings section
    return (
        <div className="px-2 marginTop mb-5">
            <h4 className="text-warning text-uppercase pt-2 mb-4">
                <i>All the booked tours are below</i>
            </h4>
            <h1 className="text-info text-uppercase">Manage All The Booking Tours</h1>
            {/* table for storing info */}
            <Table responsive="sm" striped bordered hover variant="dark" className="mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Tour</th>
                        <th>Status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody className="bg-dark">
                    {
                        allBookings.map((allBooking, index) =>
                            <tr key={index} className="text-start">
                                <td>{index + 1}</td>
                                <td>{allBooking?.fullName}</td>
                                <td>{allBooking?.email}</td>
                                <td className="text-uppercase">{allBooking?.title}</td>
                                <td className="text-uppercase">{allBooking?.status}</td>
                                <td className="d-flex align-items-center">
                                    <button onClick={() => handleApproved(allBooking?._id)} className="btn btn-success me-3"><i className="fas fa-check"></i></button>
                                    <button onClick={() => handleCancel(allBooking?._id)} className="btn btn-danger"><i className="fas fa-times"></i></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageTours;