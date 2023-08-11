import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

export const Login = async (req, res) => {
	function geerateAccessToken(user) {
		return jwt.sign(user, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRES_IN,
		});
	}
	//ver 1 code
	// //get user from db
	// const user = await Users.findAll({
	// 	where: {
	// 		name: req.body.name,
	// 	},
	// });

	// try {
	// 	//check password
	// 	if (req.body.password === user[0].password) {
	// 		//create token
	// 		const token = jwt.sign({ id: user[0].id, name: user[0].name }, "abc", {
	// 			expiresIn: "10s",
	// 		});
	// 		res.json({ ok: true, token }); //return token
	// 		// console.log(user[0].id);
	// 	} else {
	// 		throw new Error("notMatch");
	// 	}
	// } catch (error) {
	// 	res.json({ ok: false });
	// }

	//ver 2 code
	// try {
	// 	const user = await Users.findAll({
	// 		where: {
	// 			name: req.body.name,
	// 		},
	// 	});

	// 	const match = await bcrypt.compare(req.body.password, user[0].password);
	// 	console.log(req.body.password);
	// 	if (!match) return res.json({ ok: false });
	// 	const token = jwt.sign({ id: user[0].id, name: user[0].name }, "abc", {
	// 		expiresIn: "15s",
	// 	});
	// 	res.json({ ok: true, token });
	// } catch (error) {
	// 	res.json({ ok: false });

	//ver 3 code
	try {
		const user = await Users.findAll({
			where: {
				name: req.body.name,
			},
		});

		// const match = await bcrypt.compare(req.body.password, user[0].password);
		// user.password === user[0].password
		const hashPassword = await bcrypt.hash(req.body.password, user[0].salt);
		// check password
		if (hashPassword === user[0].password) {
			// create token
			const token = jwt.sign({ id: user[0].id, name: user[0].name }, "abc", {
				expiresIn: "60s",
			});
			res.json({ ok: true, token });
		} else {
			res.json({ ok: false });
		}
		// if (!match) return res.json({ ok: false });
	} catch (error) {
		res.json({ ok: false });
	}
};

export const Signup = async (req, res) => {
	const { name, password } = req.body;
	const salt = await bcrypt.genSalt(); // create salt value
	const hashPassword = await bcrypt.hash(password, salt); // hash the password with salt
	try {
		Users.count({ where: { name: name } }).then((count) => {
			if (count !== 0) {
				console.log("User exists");
				res.json({ ok: false });
			} else {
				Users.create({
					name: name,
					password: hashPassword,
					salt: salt,
				});
				res.json({ ok: true });
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export const changePassword = async (req, res) => {
	try {
		const user = await Users.findOne({ where: { name: req.body.name } }); //find user name and password from db
		// console.log("a", user);
		// console.log("a", user.password);
		const match = await bcrypt.compare(req.body.oldPassword, user.password);
		if (match) {
			// console.log(user.password);
			const hashPassword = await bcrypt.hash(req.body.newPassword, user.salt);

			user.set({ password: hashPassword });
			await user.save(); // save to database
			res.json({ ok: true });
		} else {
			res.json({ ok: false, msg: "password not match" });
		}
	} catch (error) {
		console.log(error);
		res.json({ ok: false });
	}
};

// const saltPassword = (salt, password) => {};
