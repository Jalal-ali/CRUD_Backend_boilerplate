import express from 'express'
import CrudRoutes from './routes/crud.routes.js'
import connectDB from './db/index.js';
const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello umar!')
})
app.use("/api/v2", CrudRoutes);
connectDB() ;


export default app ;