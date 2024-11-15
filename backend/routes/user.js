import express from "express";
import userControllers from "../controllers/user.js";
import authorize from "../middlewares/authorization.js";
const Router = express.Router();

Router
    .post("/register", userControllers.registerUser)
    .post("/login", userControllers.loginUser)
    .get("/profile",authorize, userControllers.getUserProfile)
    .get("/verify-email", userControllers.verifyEmail)
    
export default Router;
