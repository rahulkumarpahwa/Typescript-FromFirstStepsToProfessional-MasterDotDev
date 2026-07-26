import express from "express";
import type { Request, Response } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";

import apiRouter from "./routes/api.ts";

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/api", apiRouter);

app.use(
  (_req: Request, res: Response<{ error: string; endpoints: string[] }>) => {
    res.status(404).json({
      error: "Not Found",
      endpoints: ["/api/events", "/api/users"],
    });
  },
);

app.listen(PORT, () => {
  console.log(`\nServer listening at http://localhost:${PORT}`);
  console.log(`Server running in ${NODE_ENV} mode\n`);
});
