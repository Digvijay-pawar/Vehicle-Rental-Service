import { createStore, applyMiddleware} from "redux"
import {thunk} from "redux-thunk";
import rootReducer from "./rootReducer"
import { createLogger } from "redux-logger";

// Create the logger middleware
const logger = createLogger({
  collapsed: true,
  diff: true        
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store