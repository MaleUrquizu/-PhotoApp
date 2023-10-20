import express from "express"
import { uploadMulter, uploadB2 } from "../Middlewares/MulterMiddleware.js"
import { createPost, deletePost, getAllPosts, getSinglePost, getUserPosts, imageUpdate, updatePost } from "../Controllers/PostsControllers.js"
import { verifyToken } from "../Middlewares/AuthMiddleware.js"

const router = express.Router()

router.get('/myprofile', verifyToken, getUserPosts);

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);

router.post('/upload', verifyToken, uploadMulter, uploadB2, createPost);

router.put('/update/:id', verifyToken, updatePost);
router.put('/image/update/:id', verifyToken, uploadMulter, uploadB2, imageUpdate);

router.delete('/delete/:id', verifyToken, deletePost);

export default router