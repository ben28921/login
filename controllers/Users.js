import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const Login = async (req, res) => {
	function geerateAccessToken(user) {
		return jwt.sign(user, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRES_IN,
		});
	}
	//get user from db
	const user = await Users.findAll({
		where: {
			name: req.body.name,
		},
	});

	try {
		//check password
		if (req.body.password === user[0].password) {
			//create token
			const token = jwt.sign({ id: user[0].id, name: user[0].name }, "abc", {
				expiresIn: "90d",
			});
			res.json({ ok: true, token }); //return token
			// console.log(user[0].id);
		} else {
			throw new Error("notMatch");
		}
	} catch (error) {
		res.json({ ok: false });
	}
};
