import express from "express";
import cors from "cors";
import bfhlRoutes from "./routes/bfhlRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/bfhl", bfhlRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;