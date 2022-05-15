import express from "express";
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

app.listen(3003, () =>
  console.log("Server is running in http://localhost:3003")
);
