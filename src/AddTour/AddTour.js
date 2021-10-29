import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../images/logo.png'

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="container mb-5" style={{ marginTop: "100px" }}>
            <div className="w-50 pb-5 pt-3 border rounded-3 mx-auto shadow-lg">
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
                        {...register("duration", { required: true })}
                        className="form-control w-75 mx-auto"
                        placeholder="Duration"
                    />
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        className="form-control w-75 mx-auto my-4"
                        placeholder="Price"
                    />
                    <input type="submit" value="Add" className="btn btn-info text-white w-75 mt-3" />
                </form>
            </div>
        </div>
    );
};

export default AddTour;