import express from "express";
import { Login, Signup } from ".././controllers/Users.js";
import { getStockData } from ".././controllers/Stock.js";
import { getLuckyDraw } from "../controllers/draw.js";

const router = express.Router();

router.get("/stock", getStockData);
router.get("/draw", getLuckyDraw);
router.post("/login", Login);
router.post("/signUp", Signup);

export default router;
