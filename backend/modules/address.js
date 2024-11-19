import mongoose from "mongoose";

// Define address schema
const addressSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "User"
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    }
});

const Address = mongoose.model("Address", addressSchema);
export default Address;
