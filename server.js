import express from 'express';
import cors from 'cors';
import rateLimit from "express-rate-limit";
import userRoutes from './routes/usersRoutes.js';

import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Set up rate limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 1, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later."
});

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));

app.use(express.json());
app.use("/users", userRoutes);

app.use(express.urlencoded({ extended: true }));

// Apply to all requests
app.use(limiter);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
