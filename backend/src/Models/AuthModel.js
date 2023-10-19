import userSchema from "../Schemas/AuthSchema.js";
import mongoose from "mongoose";

const User = mongoose.model('users', userSchema);

export default User