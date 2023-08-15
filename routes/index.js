import express from "express";
import { Login, Signup, changePassword } from ".././controllers/Users.js";
import { getStockData, getStockDataP } from ".././controllers/Stock.js";
import {
	getLuckyAllDraw,
	getLuckyDraw,
	getLuckyDrawDate,
	getLuckyDrawP,
} from "../controllers/Draw.js";

const router = express.Router();

router.get("/stock", getStockData);
router.get("/stockP", getStockDataP);
router.get("/draw", getLuckyDraw);
router.get("/drawP", getLuckyDrawP);
router.post("/login", Login);
router.post("/signUp", Signup);
router.put("/changePassword", changePassword);
router.get("/getLuckyDrawDate", getLuckyDrawDate);
router.get("/getAllDate", getLuckyAllDraw);

export default router;
