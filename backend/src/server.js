import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const __dirname = path.resolve();

app.get("/hi", (req, res) => {
  res.status(200).json({ msg: "hello from server.js" });
});

app.get("/bye", (req, res) => {
  res.status(200).json({ msg: "Bye from server.js" });
});

// make app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log(`server is running on port http://localhost:${ENV.PORT}`);
});
