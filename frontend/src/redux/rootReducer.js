import { combineReducers  } from "redux"
import signUpReducer from "./signup/signUpReducer";
import signInReducer from "./signin/signInReducer";


const rootReducer = combineReducers ({
    signUp: signUpReducer,
    signIn: signInReducer
})

export default rootReducer