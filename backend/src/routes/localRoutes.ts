import express from "express";
import { LocalController } from "../controllers/LocalController";

const localRouter = express.Router();

localRouter.get("/", new LocalController().getLocals);
localRouter.post("/", new LocalController().createLocals);
localRouter.put("/:id", new LocalController().updateLocals);
localRouter.delete("/:id", new LocalController().deleteLocals);

export default localRouter;