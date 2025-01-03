import { SIGNUP_SUCCESS, SIGNUP_LOADING, SIGNUP_FAILURE } from "./signUpTypes";

const initialState = {
    isLoading: false,
    userData: null,
    error: ""
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLoading: false
            }
            
        case SIGNUP_LOADING:
            return {
                ...state,
                isLoading: true
            }
        
        case SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        default:
            return state
    }
}


export default signUpReducer