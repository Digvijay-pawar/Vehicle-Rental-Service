import axios from 'axios'
import { SIGNIN_SUCCESS, SIGNIN_LOADING, SIGNIN_FAILURE, LOGOUT } from "./signInTypes";

export const signInSuccess = (userData) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: userData
    }
}

export const signInLoading = () => {
    return {
        type: SIGNIN_LOADING
    }
}

export const signInFailure = (error) => {
    return {
        type: SIGNIN_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const  signIn = (formData) => {
    return async (dispatch) => {
        dispatch(signInLoading())

        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, formData)
            .then(res => {
                dispatch(signInSuccess(res.data))
            })
            .catch(error => {
                let errorMessage = "An error occurred during registration.";
                
                if (error.response) {
                    // Server responded with an error status
                    errorMessage = error.response.data.message || "Something went wrong on the server.";
                } else if (error.request) {
                    // No response received from the server
                    errorMessage = "No response from the server. Please try again later.";
                } else {
                    // An error occurred while setting up the request
                    errorMessage = error.message;
                }

                // Dispatch failure action with the error message
                dispatch(signInFailure(errorMessage));
            })
    }
}