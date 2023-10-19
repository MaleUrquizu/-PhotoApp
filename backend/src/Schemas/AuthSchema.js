import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
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
    roles: [
        {
            ref: "Role",
            default: "user",
            type: Schema.Types.ObjectId,
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
    collection: 'user', // Specify the collection name
});

// Static method to encrypt a password
UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};

// Static method to compare a password
UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

const User = mongoose.model('User', UserSchema);

export default User;
