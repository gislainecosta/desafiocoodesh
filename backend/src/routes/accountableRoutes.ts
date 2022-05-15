import express from "express";
import { AccountableController } from "../controllers/AccountableController";

const accountableRouter = express.Router();

accountableRouter.get("/", new AccountableController().getAccountables);

export default accountableRouter;