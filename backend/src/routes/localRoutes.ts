import express from "express";
import { LocalController } from "../controllers/LocalController";

const localRouter = express.Router();

localRouter.get("/", new LocalController().getLocals);

export default localRouter;