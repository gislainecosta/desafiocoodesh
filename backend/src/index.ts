import express, { Request, Response, NextFunction, } from "express";
import userRouter from "./routes/userRoutes";
import companyRouter from "./routes/companyRoutes"
import localRouter from "./routes/localRoutes";
import accountableRouter from "./routes/accountableRoutes";
import ticketRouter from "./routes/ticketRoutes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/accountables", accountableRouter);
app.use("/companies", companyRouter);
app.use("/locals", localRouter);
app.use("/tickets", ticketRouter);

app.use((error:any, req:Request, res:Response, next:NextFunction) => {
  console.log(typeof error)
  res.status(error.status || 500)
  res.json({ error: error.message})
})

app.listen(3003, () =>
  console.log("Server is running in http://localhost:3003")
);
