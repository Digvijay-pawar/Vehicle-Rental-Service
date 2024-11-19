import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Link, useNavigate} from 'react-router-dom';
import { useAuthContext } from '../hook/useAuthContext';

function Header() {
    const { user } = useContext(AuthContext);
    const isLogin = !!user;
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem("authToken");
        dispatch({type: "LOGOUT"});
        navigate("/")
    }

    return (
        <header className="navbar fixed top-0 z-50 opacity-100 bg-white border-b px-5 py-4 lg:px-10">
            {/* Logo */}
            <div className="flex-1">
                <img height={20} width={160} src="images/image.png" alt="" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-none space-x-4">
                <Link to={'/'} className="btn btn-ghost">Home</Link>
                <Link className="btn btn-ghost">About</Link>
                <Link className="btn btn-ghost">Services</Link>
                <Link className="btn btn-ghost">Contact</Link>
            </div>

            {/* Login/Logout State */}
            <div className="flex-none flex items-center space-x-4">
                {isLogin ? (
                    <>
                        {/* Cart Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Profile"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow">
                                <li className="my-2">
                                    <Link to='/profile'>Profile</Link>
                                </li>
                                <li className="my-1"><a>Settings</a></li>
                                <li onClick={handleLogout} className="my-1"><a>Logout</a></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link to="/login" className="btn btn-primary ml-2">Login</Link>
                )}
            </div>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
