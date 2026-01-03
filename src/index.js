import express from 'express'
import {config} from 'dotenv'
import { connectDB, disconnectDB } from './config/db.js';



import movieRoute from './routes/movieRoutes.js';



config()
connectDB()

const app = express();

const PORT = 5001;


app.use("/movies", movieRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


