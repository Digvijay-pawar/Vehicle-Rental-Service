import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useResetPassword } from '../hook/useResetPassword.js';

function ResetPassword() {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        token: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [result, setResult] = useState(false);
    const { resetPassword, error, isLoading, setError } = useResetPassword();
    
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');
        if (token) {
            setFormData((prev) => ({ ...prev, token }));
        }
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords must match.');
            return;
        }

        const res = await resetPassword(formData);
        if (res) {
            setResult(true);
        }
    };

    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card lg:card-side bg-base-100 max-w-5xl shadow-xl" style={{ height: '600px' }}>
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
                    <img src="images/bg_3.jpg" alt="Reset password visual" className="object-cover w-full h-full" />
                </figure>

                {result ? (
                    <div className="flex flex-col lg:w-1/2 p-8 items-center justify-center">
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
                        <h2 className="text-2xl font-bold text-center mb-4">Password Reset Successful!</h2>
                        <p className="text-center text-gray-700 mb-6">
                            Your password has been successfully reset. Please use your new password to log in to your account.
                        </p>
                        <Link to="/" className="btn btn-primary text-xl px-6 py-3 rounded-lg">
                            Go to Login
                        </Link>
                    </div>
                ) : (
                    <div className="lg:w-1/2 p-8">
                        <h2 className="card-title text-3xl font-bold mb-6">Reset Password</h2>
                        <form onSubmit={handleSubmit} className={isLoading ? 'opacity-50' : ''}>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="text-xl">Create Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                    <input
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        className="grow text-xl"
                                        name="password"
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
                                        required
                                        type="password"
                                        name="confirmPassword"
                                        className="grow text-xl"
                                        placeholder="Confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={isLoading} type="submit" className="btn btn-primary text-xl">
                                    {isLoading ? 'Resetting...' : 'Reset Password'}
                                </button>
                                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <p>Don't have an account?</p>
                            <Link to="/" className="link link-primary">
                                Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResetPassword;
