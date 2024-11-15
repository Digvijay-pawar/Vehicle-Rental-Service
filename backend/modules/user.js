import mongoose from "mongoose";

// Define address schema
const addressSchema = new mongoose.Schema({
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

// Define user schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: addressSchema,
        required: false
    },
    isVerified: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
