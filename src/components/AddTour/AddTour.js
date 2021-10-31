import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import Jump from 'react-reveal/Jump';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post("https://traveller-dotcom-server.herokuapp.com/add", data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.dark("😃New Tour Successfully Added!")
                    reset()
                };
            })
    };

    // add new tour section
    return (
        <div className="container mb-5" style={{ marginTop: "100px" }}>
            <ToastContainer />
            <Jump>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 col-12">
                        <div className="pb-5 pt-3 border rounded-3 mx-auto shadow-lg">
                            <img src={logo} alt="" className="w-25" />
                            <h3 className="my-4 text-uppercase text-info">Add New Tour Form</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("title", { required: true })}
                                    className="form-control w-75 mx-auto"
                                    placeholder="Tour title or place"
                                />
                                <input
                                    {...register("country", { required: true })}
                                    className="form-control w-75 mx-auto my-4"
                                    placeholder="Country or city"
                                />
                                <input
                                    {...register("description", { required: true })}
                                    className="form-control w-75 mx-auto"
                                    placeholder="Description"
                                />
                                <input
                                    {...register("duration", { required: true })}
                                    className="form-control w-75 mx-auto  my-4"
                                    placeholder="Duration"
                                />
                                <input
                                    type="number"
                                    {...register("price", { required: true })}
                                    className="form-control w-75 mx-auto"
                                    placeholder="Price"
                                />
                                <input
                                    {...register("img", { required: true })}
                                    className="form-control w-75 mx-auto my-4"
                                    placeholder="Image Url"
                                />
                                <input type="submit" value="Add" className="btn btn-info text-white w-75 mt-3" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Jump>
        </div>
    );
};

export default AddTour;