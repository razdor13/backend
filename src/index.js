import express, { Router } from 'express'
import movieRoute from './routes/movieRoutes.js';

const app = express();

const PORT = 5001;


app.use("/movies", movieRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


