import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card lg:card-side bg-base-100 max-w-5xl shadow-xl" style={{ height: '600px' }}>
                <figure className="lg:w-1/2">
                    <img src="images/bg_3.jpg" alt="Random image" className="object-cover w-full h-full" />
                </figure>
                <div className="card-div lg:w-1/2 p-8">
                    <h2 className="card-title text-3xl font-bold mb-6">Login</h2>
                    <form className=''>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow text-xl" placeholder="email@example.com" />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="grow text-xl"
                                    placeholder="Enter password"
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
                            <label className="label">
                                <a href="#" className="label-text link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-xl">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="text-center">
                        <p>Don't have an account?</p>
                        <Link to="/register" className="link link-primary">Create account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
