import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connectDB } from './src/DataBase/Connection.js';

import postRoutes from './src/Routes/PostsRoutes.js'
import authRoutes from './src/Routes/AuthRoutes.js'

const app = express();

connectDB()
app.use(cors())
app.use(express.json())

app.use('/post', postRoutes)
app.use('/auth', authRoutes)


app.listen(process.env.PORT_CONNECTION || process.env.ALT_PORT_CONNECTION)
console.log("server on port", process.env.PORT_CONNECTION)