import express from "express";
import { handleBFHL } from "../controllers/bfhlController.js";

const router = express.Router();

router.post("/", handleBFHL);

export default router;