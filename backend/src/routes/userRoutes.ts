import express from "express";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();

userRouter.get("/", new UserController().getUsers);
userRouter.post("/", new UserController().createUsers);
userRouter.put("/:id", new UserController().updateUsers);
userRouter.delete("/:id", new UserController().deleteUsers);

export default userRouter;