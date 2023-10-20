import express from "express";
import { Login, Register } from "../Controllers/AuthController.js";
const router = express.Router()

router.post('/', Register)
router.post('/login', Login)


export default router