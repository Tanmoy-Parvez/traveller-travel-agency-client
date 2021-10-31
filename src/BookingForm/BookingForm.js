import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import logo from '../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import { Card } from 'react-bootstrap';


const BookingForm = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [tour, setTour] = useState({})
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://traveller-dotcom-server.herokuapp.com/tour/${id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])

    const onSubmit = data => {
        data.status = "Pending";
        data.price = tour?.price;
        data.img = tour?.img;
        axios.post("https://traveller-dotcom-server.herokuapp.com/booking", data)
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
            <div className="row d-flex align-items-center g-4">
                <div className="col-md-6">
                    <Card>
                        <Card.Img variant="top" src={tour?.img} />
                        <Card.Body className="text-uppercase">
                            <h3 className="text-secondary">{tour.country}</h3>
                            <Card.Title>
                                <h2>{tour?.title}</h2>
                            </Card.Title>
                            <Card.Text>
                                <h5 className="text-secondary my-3">{tour?.description}</h5>
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-between px-5">
                                <h4>{tour?.duration}</h4>
                                <h4 className="text-warning">${tour?.price}</h4>
                            </Card.Text>
                            <h5 className="text-white mt-4 bg-info py-2">Please Fill the booking form</h5>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <div className="py-5 border rounded-3 mx-auto shadow-lg animate__animated animate__backInDown">
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
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 my-3"
                                placeholder="Username or email"
                            />
                            <input
                                type="date"
                                {...register("date", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0"
                                placeholder="Date"
                            />
                            {errors.date && <span className="text-danger">*Give the booking date</span>}
                            <input
                                {...register("address", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3"
                                placeholder="Address"
                            />
                            {errors.address && <span className="text-danger">*This field is required</span>}
                            <input
                                defaultValue={tour?.title}
                                {...register("title", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3 "
                                placeholder="Tour title"
                            />
                            {errors.title && <span className="text-info">If is it ok? Then press book</span>}
                            <input type="submit" value="Book" className="btn btn-info text-white w-75 mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;