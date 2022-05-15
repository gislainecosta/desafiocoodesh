import express from "express";
import { CompanyController } from "../controllers/CompanyController";

const userRouter = express.Router();

userRouter.get("/", new CompanyController().getCompanies);
userRouter.post("/", new CompanyController().createCompanies);
userRouter.put("/:id", new CompanyController().updateCompanies);
userRouter.delete("/:id", new CompanyController().deleteCompanies);

export default userRouter;