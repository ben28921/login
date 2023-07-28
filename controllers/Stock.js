import Stock from "../models/StockModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const getStockData = async (req, res) => {
	//check headers with property authorization or not
	if (req.headers.hasOwnProperty("authorization")) {
		const token = req.headers.authorization.split(" ")[1]; //get token from header
		const stock = await Stock.findAll(); // get stock info
		if (token) {
			//verify token
			jwt.verify(token, "abc", function (err, decoded) {
				if (err) {
					res.json({ ok: false }); // if error exit return false
				} else {
					res.json(stock);
					// console.log(token);
				}
			});
		}
	} else {
		res.json({ ok: false });
	}

	// }
};
