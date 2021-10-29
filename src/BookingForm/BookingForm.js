import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import logo from '../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [tour, setTour] = useState({})
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/tour/${id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])

    const onSubmit = data => {
        axios.post("http://localhost:5000/booking", data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.dark("😃Tour Successfully Booked!")
                    reset()
                };
            })
    };
    return (
        <div className="container mb-5" style={{ marginTop: "100px" }}>
            <ToastContainer />
            <div className="w-50 py-5 border rounded-3 mx-auto shadow-lg">
                <img src={logo} alt="" className="w-25" />
                <h3 className="my-3 text-uppercase text-info">Tour Booking Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue={user?.displayName}
                        {...register("fullName", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0"
                        placeholder="Full Name"
                    />
                    <input
                        defaultValue={user?.email}
                        {...register("email", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 my-4"
                        placeholder="Username or email"
                    />
                    <input
                        type="date"
                        {...register("date", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0"
                        placeholder="Date"
                    />
                    <input
                        {...register("address", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 my-4"
                        placeholder="Address"
                    />
                    <input
                        defaultValue={tour?.title}
                        {...register("title", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mb-2"
                        placeholder="Activity"
                    />

                    <input type="submit" className="btn btn-info text-white w-75 mt-4" />
                </form>
            </div>
        </div>
    );
};

export default BookingForm;