import express from "express";
import { UserController } from "../controllers/UserController"

const userRouter = express.Router();

userRouter.get("/", new UserController().getUsers);

export default userRouter;