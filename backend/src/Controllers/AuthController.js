import bcrypt from "bcryptjs";
import User from '../Models/AuthModel.js';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

// REGISTER

export const Register = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating the user' });
    }
};

// LOGIN

export const Login = async (req, res) => {

    const userFound = await User.findOne({ email: req.body.email });

    if (!userFound) return res.status(400).json({ message: "Incorrect email or password" })

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({ token: null, message: "Incorrect email or password" })

    // Only include user ID in the token payload
    const payload = {
        id: userFound._id
    };

    // Sign the token with the modified payload
    const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: 86400
    });

    // Respond with the token
    res.json({ token });
}

// LOGOUT

export const logout = async (req, res) => {
    try {
      // Clear the session cookie
      res.clearCookie('token'); 
  
      res.json({ message: "Session successfully closed" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error logging out' });
    }
};
