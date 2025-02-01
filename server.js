import express from 'express';
import cors from 'cors';
import userRoutes from './routes/usersRoutes.js';

import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    "origin": '',
    "credentials": true
}));

app.use(express.json());
app.use("/users", userRoutes);

app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
