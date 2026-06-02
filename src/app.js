import express from "express";
import authRouter from "./routes/auth.routes.js";
import errorMiddleware from "./middleware/error.Middleware.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRouter);

app.use(errorMiddleware);
export default app;
