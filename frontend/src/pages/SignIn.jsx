import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import signInSchema from "../schema/signInSchema";
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from "../redux/signin/signInActions";
import { useNavigate } from "react-router-dom";
import Figure from "../components/Figure";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect } from "react";

function SignIn() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange",
        resolver: zodResolver(signInSchema)
    })

    const { errors } = formState

    const isLoading = useSelector(state => state.signIn.isLoading)
    const isLogin = useSelector(state => state.signIn.isLogin)
    const error = useSelector(state => state.signIn.error)
    
    const dispatch = useDispatch()

    const submitHandler = (data, e) => {
        e.preventDefault()
        dispatch(signIn(data))
    }

    useEffect(() => {
        if (isLogin) {
            navigate("/")
        }
    }, [isLogin, navigate])

    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div
                className="card lg:card-side bg-base-100 w-full max-w-4xl shadow-xl"
                style={{ height: "600px" }}
            >
                <Figure />
                <div className="card-div lg:w-1/2 p-8 flex flex-col justify-between">
                    <h2 className="card-title text-3xl font-bold mb-6">Register</h2>
                    {isLoading ? <Loader /> :
                        <form className="flex-grow" onSubmit={handleSubmit(submitHandler)}>
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
                            <div className="form-control mt-6 flex justify-between">
                                <button type="submit" className="btn btn-primary text-xl">
                                    Login
                                </button>
                                <p className="text-red-500 text-sm mt-1">{error}</p>
                            </div>
                        </form>}
                    {/* OR Divider */}
                    <div className="divider">OR</div>
                    <div className="text-center">
                        <p>Don't have an account?</p>
                        <Link to="/register" className="link link-primary">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SignIn;