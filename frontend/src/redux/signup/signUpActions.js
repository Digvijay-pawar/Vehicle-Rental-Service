import axios from 'axios'
import { SIGNUP_SUCCESS, SIGNUP_LOADING, SIGNUP_FAILURE } from "./signUpTypes"

export const signUpSuccess = (userData) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: userData
    }
}

export const signUpLoading = () => {
    return {
        type: SIGNUP_LOADING
    }
}

export const signUpFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        payload: error
    }
}


export const signUp = (formData) => {
    return async (dispatch) => {
        dispatch(signUpLoading())

        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, formData)
            .then((respose) => {
                dispatch(signUpSuccess(respose))
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
                dispatch(signUpFailure(errorMessage));
            })

    }
}