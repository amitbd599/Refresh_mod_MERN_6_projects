import express from "express";
const router = express.Router();
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as UsersController from "../app/controllers/UsersController.js";

// Users
router.post("/register", UsersController.register)
router.post("/login", UsersController.login)
router.get("/profile-read", AuthMiddleware, UsersController.profileRead)
router.get("/logout", AuthMiddleware, UsersController.logOut)
router.get("/recover-verify-email/:email", AuthMiddleware, UsersController.recoverVerifyEmailUser)
router.get("/recover-verify-otp/:email/:otp", AuthMiddleware, UsersController.recoverVerifyOTPUser)
router.post("/reset-password/:email/:otp", AuthMiddleware, UsersController.resetPasswordUser)

export default router;


