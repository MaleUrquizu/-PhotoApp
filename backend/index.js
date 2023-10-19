import express from 'express';
import cors from 'cors';
import './src/DataBase/Connection.js';

import postRoutes from './src/Routes/PostsRoutes.js'
import authRoutes from './src/Routes/AuthRoutes.js'

const app = express();
app.use(cors())
app.use(express.json())


app.use('/post', postRoutes)
app.use('/auth', authRoutes)



app.listen(8000, () => {
    console.log('Server on port 8000');
});