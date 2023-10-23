import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connectDB } from './src/DataBase/Connection.js';

import postRoutes from './src/Routes/PostsRoutes.js';
import authRoutes from './src/Routes/AuthRoutes.js';

const app = express();

const PORT = process.env.TEST_PORT || process.env.PORT_CONNECTION;

if (process.env.NODE_ENV !== 'test') {

  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
}

connectDB();
app.use(cors());
app.use(express.json());

app.use('/post', postRoutes);
app.use('/auth', authRoutes);

export default app;
