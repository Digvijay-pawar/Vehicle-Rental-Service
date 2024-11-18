import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../modules/user.js";
import { z } from "zod";
import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv()
// Create transporter for sending email (using Gmail here)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});


// Define the schema using Zod
const registerSchema = z.object({
    fullName: z.string().min(1, "Full name is required"), // Ensures fullName is a non-empty string
    email: z.string().email("Invalid email format"), // Ensures email is a valid email format
    password: z.string().min(6, "Password must be at least 6 characters"), // Password must be 6+ characters
    phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"), // Phone number must be exactly 10 digits
});

// Define the login schema using Zod
const loginSchema = z.object({
    email: z.string().email("Invalid email format"), // Ensure email is valid
    password: z.string().min(6, "Password must be at least 6 characters") // Ensure password is at least 6 characters
});

// Define the profile schema (though no input validation is strictly required)
const profileSchema = z.object({
    userId: z.string().min(1, "User ID is required") // Validate that userId is present in the request
});

// Controller to handle user registration
const registerUser = async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber, address } = req.body;

        // Validate the incoming request data with Zod
        const parsedData = registerSchema.safeParse(req.body);

        if (!parsedData.success) {
            return res.status(400).json({ message: parsedData.error.errors[0].message });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user but mark as unverified
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
            phoneNumber,
            isVerified: false // Initially the user is not verified
        });

        await newUser.save();

        // Create an email verification token
        try {
            const emailVerificationToken = jwt.sign(
                { userId: newUser._id, email: newUser.email },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            // Send verification email
            const verificationLink = `${process.env.BASE_URL}/verify-email?token=${emailVerificationToken}`;

            await transporter.sendMail({
                to: email,
                subject: "Verify Your Email Address",
                html: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fc;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            text-align: center;
            margin-bottom: 30px;
          }
          .email-header h1 {
            color: #4CAF50;
            font-size: 36px;
            margin: 0;
          }
          .email-header p {
            font-size: 16px;
            color: #666;
          }
          .email-body {
            font-size: 16px;
            color: #333;
            line-height: 1.6;
          }
          .cta-button {
            display: inline-block;
            background-color: black;
            color: white;
            padding: 12px 25px;
            font-size: 16px;
            border-radius: 5px;
            text-decoration: none;
            text-align: center;
            margin-top: 20px;
          }
          .cta-button:hover {
            background-color: #45a049;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>Welcome to Our Service!</h1>
            <p>Please verify your email address to complete your registration.</p>
          </div>
          <div class="email-body">
            <p>Hello <strong>${fullName}</strong>,</p>
            <p>Thank you for signing up! To activate your account, please click the button below to verify your email address.</p>
            <a href="${verificationLink}" class="cta-button">Verify Your Email</a>
            <p>If you didn't create an account with us, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Our Service. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `
            });

        } catch (error) {
            console.log(error);
        }

        res.status(201).json({ message: "User registered successfully. Please check your email to verify your account." });
    } catch (error) {
        res.status(500).json({ message: "Registration failed", error });
    }
};

// Controller to handle email verification
const verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;

        // Verify the email verification token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        // Find user and update verification status
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.isVerified = true;
        await user.save();

        res.json({ message: "Email verified successfully" });
    } catch (error) {
        res.status(500).json({ message: "Email verification failed", error });
    }
};

// Controller to handle user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate the incoming request data with Zod
        const parsedData = loginSchema.safeParse(req.body);

        if (!parsedData.success) {
            return res.status(400).json({ message: parsedData.error.errors[0].message });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.isVerified){
            return res.status(400).json({ message: "Verify your account" });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
};

// Controller to get user profile
const getUserProfile = async (req, res) => {
    try {
        // Validate the userId (coming from middleware after JWT verification)
        const userId = req.userId;

        // Validate the userId using Zod
        const parsedData = profileSchema.safeParse({ userId });

        if (!parsedData.success) {
            return res.status(400).json({ message: parsedData.error.errors[0].message });
        }

        // Fetch user profile excluding password
        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile", error });
    }
};

// Forgot Password Controller
const forgotPassword = async (req, res) => {
  try {
      const { email } = req.body;

      // Check if email exists
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Generate a password reset token
      const resetToken = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
      );

      // Password reset link
      const resetLink = `http://localhost:5173/reset-password?token=${resetToken}`;

      // Send email with password reset link
      await transporter.sendMail({
          to: email,
          subject: "Password Reset Request",
          html: `
      <html>
        <body style="font-family: Arial, sans-serif; text-align: center; background-color: #f7f7f7; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">Password Reset Request</h2>
            <p style="color: #555;">You requested a password reset for your account.</p>
            <p style="color: #555;">Click the button below to reset your password:</p>
            <a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
            <p style="color: #999; margin-top: 20px;">If you did not request this, please ignore this email.</p>
            <p style="color: #999;">&copy; ${new Date().getFullYear()} Your Company</p>
          </div>
        </body>
      </html>
      `
      });

      res.json({ message: "Password reset link sent to your email." });
  } catch (error) {
      res.status(500).json({ message: "Error sending password reset email", error });
  }
};

// Reset Password Controller
const resetPassword = async (req, res) => {
  try {
      const { token } = req.query;
      const { password } = req.body;
      console.log(token, password)
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;

      // Check if user exists
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Update the user's password
      user.password = hashedPassword;
      await user.save();

      res.json({ message: "Password reset successful" });
  } catch (error) {
      res.status(500).json({ message: "Error resetting password", error });
  }
};

export default { registerUser, loginUser, getUserProfile, verifyEmail, forgotPassword, resetPassword};
