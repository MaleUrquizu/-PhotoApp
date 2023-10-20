import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        unique: true,
    },
    lastName: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true,
    versionKey: false,
    collection: 'user', 
});

// Static method to encrypt a password
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};

// Static method to compare a password
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

export default userSchema;
