import express from "express";
import { Login } from ".././controllers/Users.js";
import { getStockData } from ".././controllers/Stock.js";

const router = express.Router();

router.get("/stock", getStockData);
router.post("/login", Login);

export default router;
