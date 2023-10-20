import userSchema from "../Schemas/AuthSchema.js";
import mongoose from "mongoose";

const User = mongoose.model('User', userSchema);

export default User;
