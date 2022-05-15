import express from "express";
import userRouter from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(3003, () =>
  console.log("Server is running in http://localhost:3003/")
);
