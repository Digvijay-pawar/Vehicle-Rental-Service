import React, { useState } from "react";
import { Link } from "react-router-dom";
import Figure from "../components/Figure";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "../schema/signUpSchema";
import { useSelector, useDispatch } from 'react-redux'
import { signUp } from "../redux/signup/signUpActions";
import Loader from "../components/Loader";
import Message from "../components/Message";


function SignUp() {
    // Logic to move between steps
    const [step, setStep] = useState(1);
    const goToNextStep = () => setStep((prevStep) => prevStep + 1);
    const goToPreviousStep = () => setStep((prevStep) => prevStep - 1);

    //react hook form
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
        },
        mode: "onChange",
        resolver: zodResolver(signUpSchema)
    })

    //check application state
    const isLoading = useSelector(state => state.signUp.isLoading)
    const userData = useSelector(state => state.signUp.userData)
    const dispatch = useDispatch()

    const submitHandler = (data, e) => {
        e.preventDefault()
        dispatch(signUp(data))
    }

    const { errors } = formState
    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div
                className="card lg:card-side bg-base-100 w-full max-w-4xl shadow-xl"
                style={{ height: "600px" }}
            >
                <Figure />
                <div className="card-div lg:w-1/2 p-8 flex flex-col justify-between">
                    <h2 className="card-title text-3xl font-bold mb-6">Register</h2>
                    {isLoading ?  <Loader/>: userData ? <Message/> : <form className="flex-grow" onSubmit={handleSubmit(submitHandler)}>
                        {step === 1 && (
                            <div>
                                {/* Step 1: User Details */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl">Full Name</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-4 h-4 opacity-70"
                                        >
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a5.978 5.978 0 0 0-4.994 2.634C3.404 13.413 4.697 14 6 14h4c1.302 0 2.596-.586 3.994-2.366A5.978 5.978 0 0 0 8 9Z" />
                                        </svg>
                                        <input
                                            type="text"
                                            className="grow text-xl"
                                            placeholder="John Snow"
                                            name="fullName"
                                            {...register("fullName")}
                                        />
                                    </label>
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.fullName?.message}
                                    </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl">Email</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-4 h-4 opacity-70"
                                        >
                                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l6.674 3.717a.75.75 0 0 0 .652 0L15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path d="M15 6.954L8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input
                                            type="email"
                                            className="grow text-xl"
                                            placeholder="email@example.com"
                                            name="email"
                                            {...register("email")}
                                        />
                                    </label>
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email?.message}
                                    </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl">Mobile Number</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-4 h-4 opacity-70"
                                        >
                                            <path d="M2 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2Zm4.5 1a.5.5 0 0 0-.5.5V4h5v-.5a.5.5 0 0 0-.5-.5h-4Z" />
                                        </svg>
                                        <input
                                            type="text"
                                            className="grow text-xl"
                                            placeholder="1234567890"
                                            name="phoneNumber"
                                            {...register("phoneNumber")}
                                        />
                                    </label>
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.phoneNumber?.message}
                                    </p>
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        type="button"
                                        className="btn btn-primary text-xl"
                                        onClick={goToNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                {/* Step 2: Password Creation */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl">Create Password</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-4 h-4 opacity-70"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <input
                                            type="password"
                                            className="grow text-xl"
                                            placeholder="Create password"
                                            name="password"
                                            {...register("password")}
                                        />
                                    </label>
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password?.message}
                                    </p>
                                </div>
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="text-xl">Confirm Password</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-4 h-4 opacity-70"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <input
                                            type="password"
                                            className="grow text-xl"
                                            placeholder="Confirm password"
                                            name="confirmPassword"
                                            {...register("confirmPassword")}
                                        />
                                    </label>
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.confirmPassword?.message}
                                    </p>
                                </div>
                                <div className="form-control mt-6 flex justify-between">
                                    <button type="submit" className="btn btn-primary text-xl">
                                        Register
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>}
                    {/* OR Divider */}
                    <div className="divider">OR</div>
                    <div className="text-center">
                        <p>Already have an account?</p>
                        <Link to="/" className="link link-primary">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
