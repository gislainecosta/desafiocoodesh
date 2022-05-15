import express from "express";
import { UserController } from "../controllers/UserControler"
const knex = require("../database");

const userRouter = express.Router();

userRouter.get("/", new UserController().getUsers);

export default userRouter;