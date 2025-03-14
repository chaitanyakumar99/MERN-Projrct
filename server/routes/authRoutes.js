import express from 'express'
import { login, logout, register, sendVerifyOtp, verifyEmail } from '../controllers/authcontroller.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register', register);     //user registraction route
authRouter.post('/login', login);          //user registraction login
authRouter.post('/logout', logout);        //user registraction login
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.post('/verify-account', userAuth, verifyEmail);

export default authRouter;