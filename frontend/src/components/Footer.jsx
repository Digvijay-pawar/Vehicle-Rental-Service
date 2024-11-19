import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="relative">
            <footer className="footer bg-base-200 text-base-content px-5 py-10 lg:px-20 w-full flex flex-wrap gap-y-6 lg:justify-between">
                {/* Services Section */}
                <nav className="w-full lg:w-auto flex-1">
                    <h6 className="footer-title">Services</h6>
                    <ul className="space-y-2">
                        <li><a className="link link-hover">Car Rentals</a></li>
                        <li><a className="link link-hover">Bike Rentals</a></li>
                        <li><a className="link link-hover">Long-term Leasing</a></li>
                        <li><a className="link link-hover">Corporate Plans</a></li>
                    </ul>
                </nav>

                {/* Company Section */}
                <nav className="w-full lg:w-auto flex-1">
                    <h6 className="footer-title">Company</h6>
                    <ul className="space-y-2">
                        <li><a className="link link-hover">About RentHub</a></li>
                        <li><a className="link link-hover">Contact Us</a></li>
                        <li><Link to='/careers' className="link link-hover">Careers</Link></li>
                        <li><a className="link link-hover">Media & Press</a></li>
                    </ul>
                </nav>

                {/* Legal Section */}
                <nav className="w-full lg:w-auto flex-1">
                    <h6 className="footer-title">Legal</h6>
                    <ul className="space-y-2">
                        <li><a className="link link-hover">Terms & Conditions</a></li>
                        <li><a className="link link-hover">Privacy Policy</a></li>
                        <li><a className="link link-hover">Refund Policy</a></li>
                    </ul>
                </nav>
            </footer>

            {/* Branding & Social Links */}
            <footer className="footer bg-base-200 text-base-content border-t border-base-300 py-6 px-10">
                <div className="flex flex-wrap items-center justify-between">
                    {/* Branding Section */}
                    <aside className="flex items-center space-x-4">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="fill-current">
                            <path d="..." />
                        </svg>
                        <p className="text-sm">
                            RentHub Pvt. Ltd. <br />
                            Driving your journey since 2024
                        </p>
                    </aside>

                    {/* Social Links */}
                    <nav className="mt-4 lg:mt-0 flex space-x-4">
                        <a className="text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="..." />
                            </svg>
                        </a>
                        <a className="text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="..." />
                            </svg>
                        </a>
                        <a className="text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="..." />
                            </svg>
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
