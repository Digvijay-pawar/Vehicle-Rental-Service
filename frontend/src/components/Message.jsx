import { Link } from "react-router-dom";

function Message() {
    return (
        <div className="flex flex-col card-div lg: p-8 items-center justify-center p-6">
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
                to="/"
                className="btn btn-primary text-xl px-6 py-3 rounded-lg"
            >
                Go to Login
            </Link>
        </div>
    );
}

export default Message;