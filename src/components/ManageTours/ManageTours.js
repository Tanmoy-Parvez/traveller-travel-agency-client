import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageTours = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [cancel, setCancel] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/allBookings")
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [cancel])

    const handleCancel = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel?");
        if (proceed) {
            fetch(`http://localhost:5000/allBookings/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Booking successfully cancelled!")
                        setCancel(true)
                    };
                })
        }
    }
    return (
        <div className="px-2 marginTop mb-5">
            <h1 className="pt-5">Manage All The Booking Tours</h1>
            <Table striped bordered hover variant="dark" style={{ margin: "70px 0px" }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>UserName</th>
                        <th>Email Address</th>
                        <th>Tour Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBookings.map((allBooking, index) =>
                            <tr className="text-start">
                                <td>{index + 1}</td>
                                <td>{allBooking?.fullName}</td>
                                <td>{allBooking?.email}</td>
                                <td className="text-uppercase">{allBooking?.title}</td>
                                <td>
                                    <button className="btn btn-info me-3">{allBooking?.status}</button>
                                    <button onClick={() => handleCancel(allBooking?._id)} className="btn btn-danger">Cancel</button>
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