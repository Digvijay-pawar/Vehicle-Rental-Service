import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../hook/useLogin';
import { useForgotPassword } from '../hook/useForgotPassword';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [active, setActive] = useState(false);
    const [result, setResult] = useState(false);
    const { login, error, isLoading, setIsLoading } = useLogin();
    const { forgotPassword } = useForgotPassword()
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(formData);
        console.log(success)
        if (success) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                navigate('/home');
            }, 1000);
        }
    };

    const handleForgotPassword = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        const success = await forgotPassword(formData)
        if (success) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                setResult(true)
            }, 1000)
        }
    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`bg-base-200 min-h-screen flex items-center justify-center ${isLoading ? 'blur-sm' : ''}`}>
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
            <div className="card lg:card-side bg-base-100 max-w-5xl shadow-xl relative" style={{ height: '600px' }}>
                <figure className="lg:w-1/2">
                    <img src="images/bg_3.jpg" alt="Random image" className="object-cover w-full h-full" />
                </figure>
                {result ? <div className="flex flex-col card-div lg:w-1/2 p-8 items-center justify-center p-6">
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
                        Password Reset Link Sent!
                    </h2>
                    <p className="text-center text-gray-700 mb-6">
                        A password reset link has been sent to your email. Please check your inbox (and spam folder) to reset your password. The link will expire shortly, so complete the reset process as soon as possible.
                    </p>

                    <Link
                        to="/login"
                        className="btn btn-primary text-xl px-6 py-3 rounded-lg"
                    >
                        Go to Login
                    </Link>
                </div> :
                    <div className="card-div lg:w-1/2 p-8">
                        <h2 className="card-title text-3xl font-bold mb-6">Login</h2>
                        <form className='' onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="grow text-xl"
                                        placeholder="email@example.com"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
                                    </svg>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        disabled={active}
                                        className="grow text-xl"
                                        placeholder="Enter password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="text-gray-500 focus:outline-none"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text link link-hover" onClick={() => { setActive(true) }}>Forgot password?</a>
                                </label>
                            </div>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                            <div className="form-control mt-6">
                                {active ? <button type='button' onClick={handleForgotPassword} className="btn btn-primary text-xl">
                                    Send reset link
                                </button> :
                                    <button type='submit' className="btn btn-primary text-xl">
                                        Login
                                    </button>}
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <p>Don't have an account?</p>
                            <Link to="/register" className="link link-primary">Create account</Link>
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default Login;
