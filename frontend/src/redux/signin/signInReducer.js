import { SIGNIN_SUCCESS, SIGNIN_LOADING, SIGNIN_FAILURE, LOGOUT} from "./signInTypes";

const initialState = {
    isLoading: false,
    userData: null,
    error: "",
    isLogin: false
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                isLogin: true
            }

        case SIGNIN_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT:
            return {
                isLoading: false,
                userData: null,
                error: "",
                isLogin: false
            }
        default:
            return state
    }
}

export default signInReducer