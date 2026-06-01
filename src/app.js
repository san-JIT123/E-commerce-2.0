import express from "express";
import authRouter from "./routes/auth.routes.js";
import errorMiddleware from "./middleware/error.Middleware.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.use(errorMiddleware);
export default app;
