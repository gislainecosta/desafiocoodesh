import express from "express";
import { AccountableController } from "../controllers/AccountableController";

const accountableRouter = express.Router();

accountableRouter.get("/", new AccountableController().getAccountables);
accountableRouter.post("/", new AccountableController().createAccountables);
accountableRouter.put("/:id", new AccountableController().updateAccountables);
accountableRouter.delete("/:id", new AccountableController().deleteAccountables);

export default accountableRouter;