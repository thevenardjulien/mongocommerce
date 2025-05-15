import express from "express";
import { Logout, Login, Register } from "../controllers/authController.js";

export const authRoutes = express.Router();

authRoutes.post("/login", Login);
authRoutes.post("/register", Register);
authRoutes.get("/logout", Logout);
