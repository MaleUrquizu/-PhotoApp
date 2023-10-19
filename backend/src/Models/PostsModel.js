import postSchema from "../Schemas/PostsSchema.js";
import mongoose from "mongoose";

const Post = mongoose.model('post', postSchema);

export default Post