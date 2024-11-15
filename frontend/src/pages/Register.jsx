import React, { useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useRegister } from '../hook/useRegister';

function Register() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [result, setResult] = useState(false)
    const { register, error, isLoading, setError } = useRegister();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords must match.");
            return;
        }
        const res = await register(formData); // Await the result
        console.log(res)
        if (res) {
            setTimeout(() => setResult(true), 1000); 
        }
    };
    

    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card lg:card-side bg-base-100 max-w-5xl shadow-xl" style={{ height: '600px' }}>
                {/* Blur overlay for loading */}
                {isLoading && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center">
                        <svg
                            className="animate-spin h-10 w-10 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            ></path>
                        </svg>
                    </div>
                )}

                <figure className="lg:w-1/2">
                    <img src="images/bg_3.jpg" alt="Random image" className="object-cover w-full h-full" />
                </figure>
                {result ? (<div className="flex flex-col card-div lg:w-1/2 p-8 items-center justify-center p-6">
                    <div className="text-green-600 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-16 h-16 text-green-600"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2a10 10 0 100 20 10 10 0 000-20zM10.293 13.293a1 1 0 011.414 0l4-4a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414l.586.586z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </div>
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Registration Successful!
                    </h2>
                    <p className="text-center text-gray-700 mb-6">
                        Please check your email to verify your account. Once verified, you
                        can log in to your account.
                    </p>
                    <Link
                        to="/login"
                        className="btn btn-primary text-xl px-6 py-3 rounded-lg"
                    >
                        Go to Login
                    </Link>
                </div>) : <div className="card-div lg:w-1/2 p-8">
                    <h2 className="card-title text-3xl font-bold mb-6">Register</h2>
                    <form onSubmit={handleSubmit} className={`${isLoading ? "opacity-50" : ""}`}>
                        {step === 1 && (
                            <>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl">Full Name</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a5.978 5.978 0 0 0-4.994 2.634C3.404 13.413 4.697 14 6 14h4c1.302 0 2.596-.586 3.994-2.366A5.978 5.978 0 0 0 8 9Z" /></svg>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="grow text-xl"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="John Snow"
                                        />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl">Email</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l6.674 3.717a.75.75 0 0 0 .652 0L15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954L8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                        <input
                                            type="email"
                                            name="email"
                                            className="grow text-xl"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="email@example.com"
                                        />
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="text-xl">Mobile Number</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2Zm4.5 1a.5.5 0 0 0-.5.5V4h5v-.5a.5.5 0 0 0-.5-.5h-4Z" /></svg>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            className="grow text-xl"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="1234567890"
                                        />
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="button" className="btn btn-primary text-xl" onClick={handleNextStep}>
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="text-xl">Create Password</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="grow text-xl"
                                            name='password'
                                            placeholder="Create password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="text-gray-500 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                    <path d="M13.359 10.364l1.326 1.326a.5.5 0 1 0 .707-.708l-1.326-1.326a7.82 7.82 0 0 0 1.528-2.15.5.5 0 0 0 0-.372C13.986 3.938 11.317 2 8 2c-.922 0-1.808.136-2.638.387L3.354 0.353a.5.5 0 1 0-.708.708l12 12a.5.5 0 0 0 .708-.708l-1.327-1.326c-.2.145-.412.277-.634.403ZM3.288 7.008 5.88 9.6a3 3 0 1 0 4.24 0l1.305 1.305c-.877.473-1.86.737-2.886.737-2.93 0-5.305-2.26-6.35-4.05.21-.388.443-.757.695-1.106ZM7.293 4.293l-3.11-3.11C5.316 1.616 6.635 1 8 1c2.318 0 4.629 1.322 6.055 3.278-.043.072-.088.146-.135.218L10.707 6.707a1.5 1.5 0 1 0-1.414 1.414L4.293 5.293a6.073 6.073 0 0 1-.874.982l-.073.06a.5.5 0 0 0-.24.418ZM8 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                    <path d="M8 3C4.98 3 2.61 4.908 1.557 6.798a.5.5 0 0 0 0 .404C2.61 9.092 4.98 11 8 11s5.39-1.908 6.443-3.798a.5.5 0 0 0 0-.404C13.39 4.908 11.02 3 8 3ZM8 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                                                    <path d="M8 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z" />
                                                </svg>
                                            )}
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="text-xl">Confirm Password</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>

                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            className="grow text-xl"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="Confirm password"
                                        />
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={isLoading} type="submit" className="btn btn-primary text-xl">
                                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                        </svg>                                        Register
                                    </button>
                                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                                </div>
                            </>
                        )}
                    </form>

                    {/* "OR" divider conditionally rendered only for step 1 and step 3 */}
                    {(step === 1 || step === 2) && (
                        <> <div className="divider">OR</div>
                            <div className="text-center">
                                <p>Don't have an account?</p>
                                <Link to="/login" className="link link-primary">Login</Link>
                            </div>
                        </>
                    )}


                </div>}
            </div>
        </div>
    );
}

export default Register;