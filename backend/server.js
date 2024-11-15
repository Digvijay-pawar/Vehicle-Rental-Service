import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbconnect from './db.connection.js';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();
dbconnect();

app.use(cors());
app.use(express.json());



app.use("/api/user", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server running on " + PORT);
})