import express from 'express';
import { sequelize } from './config/db.js';
import dotenv from "dotenv";
import createOrUpdateAdmin from './utils/createOrUpdateAdmin.js';

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

createOrUpdateAdmin();

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    })