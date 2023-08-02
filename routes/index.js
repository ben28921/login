import express from "express";
import { Login, Signup } from ".././controllers/Users.js";
import { getStockData, getStockDataP } from ".././controllers/Stock.js";
import { getLuckyDraw, getLuckyDrawP } from "../controllers/draw.js";

const router = express.Router();

router.get("/stock", getStockData);
router.get("/stockP", getStockDataP);
router.get("/draw", getLuckyDraw);
router.get("/drawP", getLuckyDrawP);
router.post("/login", Login);
router.post("/signUp", Signup);

export default router;
