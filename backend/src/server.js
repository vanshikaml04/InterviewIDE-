import express from "express";
import { ENV } from "./lib/env.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "hello from server.js" });
});

app.listen(ENV.PORT, () => {
  console.log(`server is running on port http://localhost:${ENV.PORT}`);
});
