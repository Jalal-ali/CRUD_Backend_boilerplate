import express from 'express'
import cors from 'cors'
import CrudRoutes from './routes/crud.routes.js'
import connectDB from './db/index.js';
const app = express()
app.use(cors());
app.use(express.json());

app.use("/api/v2", CrudRoutes);
connectDB() ;


export default app ;