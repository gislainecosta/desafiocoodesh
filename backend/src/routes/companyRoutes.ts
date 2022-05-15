import express from "express";
import { CompanyController } from "../controllers/CompanyController";

const userRouter = express.Router();

userRouter.get("/", new CompanyController().getCompanies);

export default userRouter;