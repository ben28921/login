import axios from "axios";
import { json } from "sequelize";
import Draw from "../models/DrawModel.js";
import jwt from "jsonwebtoken";

export const getLuckyDraw = async (req, res) => {
	// if (req.headers.hasOwnProperty("authorization")) {
	// 	const token = req.headers.authorization.split(" ")[1]; //get token from header
	// 	const stock = await Stock.findAll(); // get stock info
	// 	// console.log(token);
	// 	if (token) {
	// 		//verify token
	// 		jwt.verify(token, "abc", function (err, decoded) {
	// 			if (err) {
	// 				res.json({ ok: false }); // if error exit return false
	// 			} else {
	// 				res.json(stock);
	// 				console.log(token);
	// 			}
	// 		});
	// 	}
	// } else {
	// 	res.json({ ok: false });
	// 	// console.log("abc");
	// }

	let a = [];
	let jsonP = [];
	let header = req.get("authorization");
	// console.log(req.get("authorization"));
	console.log("header", header);
	if (header) {
		const token = req.get("authorization").split(" ")[1];

		let data = await axios
			.get("https://bet.hkjc.com/contentserver/jcbw/cmc/last30draw.json") // get six mark result
			.then((data) => {
				const jsonData = data.data;
				// jsonData.forEach((element) => {
				// 	// console.log(element.no);
				// 	a = [];
				// 	// console.log(element.no.split("+"));
				// 	a = element.no.split("+");
				// 	// data.data.push({ a: a });
				// 	data.data.Number = a;
				// 	// console.log(data.data.id);
				// 	console.log("a", data.data.Number);
				// 	// jsonData.map((i) => (i.Number = a));
				// });

				jsonData.map((num) => {
					a = num.no.split("+");
					num.Number = a;
				});
				jsonP = jsonData.slice(0, req.query.day);

				console.log(req.query.day);
				console.log("len", jsonP.length);
				// res.json({ ok: true, data: data.data });
				// res.json({ ok: true, data: jsonP });
				// console.log(data.data[0]);
			})
			.catch((err) => {
				res.json({ ok: false });
				console.log(err);
			});
		if (token) {
			//verify token
			jwt.verify(token, "abc", function (err, decoded) {
				if (err) {
					res.json({ ok: false }); // if error exit return false
					console.log("token fail", token);
				} else {
					res.json({ ok: true, data: jsonP });
					console.log("token", token);
				}
			});
		}
	} else {
		res.json({ ok: false });
		console.log("abc,false");
	}
	// console.log(JSON.stringify(data));
	// console.log(data);
	// console.log(data);
	// res.send(data);
};

export const getLuckyAllDraw = async (req, res) => {
	let a = [];
	let jsonP = [];
	let data = await axios
		.get("https://bet.hkjc.com/contentserver/jcbw/cmc/last30draw.json") // get six mark result
		.then((data) => {
			const jsonData = data.data;
			// jsonData.forEach((element) => {
			// 	// console.log(element.no);
			// 	a = [];
			// 	// console.log(element.no.split("+"));
			// 	a = element.no.split("+");
			// 	// data.data.push({ a: a });
			// 	data.data.Number = a;
			// 	// console.log(data.data.id);
			// 	console.log("a", data.data.Number);
			// 	// jsonData.map((i) => (i.Number = a));
			// });

			jsonData.map((num) => {
				a = num.no.split("+");
				num.Number = a;
			});
			jsonP = jsonData.slice(0, req.query.day);

			console.log(req.query.day);
			console.log("len", jsonP.length);
			res.json({ ok: true, data: data.data });
			// res.json({ ok: true, data: jsonP });
			// console.log(data.data[0]);
		})
		.catch((err) => {
			res.json({ ok: false });
			console.log(err);
		});
	// console.log(JSON.stringify(data));
	// console.log(data);
	// console.log(data);
	// res.send(data);
};
// export const getLuckyDrawP = async (req, res) => {
// 	let a = [];
// 	let data = await axios
// 		.get("https://bet.hkjc.com/contentserver/jcbw/cmc/last30draw.json")
// 		.then((data) => {
// 			const jsonData = data.data;
// 			// jsonData.forEach((element) => {
// 			// 	// console.log(element.no);
// 			// 	a = [];
// 			// 	// console.log(element.no.split("+"));
// 			// 	a = element.no.split("+");
// 			// 	// data.data.push({ a: a });
// 			// 	data.data.Number = a;
// 			// 	// console.log(data.data.id);
// 			// 	console.log("a", data.data.Number);
// 			// 	// jsonData.map((i) => (i.Number = a));
// 			// });

// 			jsonData.map((i) => {
// 				a = i.no.split("+");
// 				i.Number = a;
// 			});

// 			res.json({ ok: true, data: data.data });
// 			// console.log(data.data[0]);
// 		})
// 		.catch((err) => {
// 			res.json({ ok: false });
// 			console.log(err);
// 		});
// 	// console.log(JSON.stringify(data));
// 	// console.log(data);
// 	// console.log(data);
// 	// res.send(data);
// };

export const getLuckyDrawDate = async (req, res) => {
	let a = [];
	let selectedItem = [];
	let data = await axios
		.get("https://bet.hkjc.com/contentserver/jcbw/cmc/last30draw.json")
		.then((data) => {
			const jsonData = data.data;
			jsonData.map((num) => {
				a = num.no.split("+");
				num.Number = a;
			});
			// console.log(data.data);
			selectedItem[0] = jsonData.find((o) => o.date === req.query.date);
			// selectedItem = jsonData;
			console.log(selectedItem);
			console.log(req.query.date);
			res.json({ ok: true, data: selectedItem });
		});
};
export const getLuckyDrawP = async (req, res) => {
	let a = [];
	let jsonP = [];
	let data = await axios
		.get("https://bet.hkjc.com/contentserver/jcbw/cmc/last30draw.json")
		.then((data) => {
			const jsonData = data.data;
			// jsonData.forEach((element) => {
			// 	// console.log(element.no);
			// 	a = [];
			// 	// console.log(element.no.split("+"));
			// 	a = element.no.split("+");
			// 	// data.data.push({ a: a });
			// 	data.data.Number = a;
			// 	// console.log(data.data.id);
			// 	console.log("a", data.data.Number);
			// 	// jsonData.map((i) => (i.Number = a));
			// });
			console.log(Object.keys(jsonData).length);
			// console.log(jsonData[0]);
			let count = 10;

			jsonData.map((i) => {
				a = i.no.split("+");
				i.Number = a;
			});

			jsonData.map((num) => {
				a = num.no.split("+");
				num.Number = a;
			});
			// if(){
			// 	jsonP=jsonData.slice(req.query.sday, req.query.eday);
			// }else if (){

			// }else()
			jsonP = jsonData.slice(req.query.sday, req.query.eday);
			// jsonP = jsonData.slice(0, 3);
			// for (let i in jsonData) {
			// 	if (i < 10) {
			// 		// jsonP += jsonData[0];
			// 		jsonP.push(jsonData[i]);

			// 		// jsonP.push(jsonData[i]);
			// 		// console.log(i, jsonData[i]);
			// 	}
			// 	// } else if (i > 10 && i < 20) {
			// 	// 	console.log(jsonData[i]);
			// 	// } else {
			// 	// 	console.log(jsonData[i]);
			// 	// }
			// }
			// console.log(jsonP);
			// res.json({ ok: true, data: data.data });
			res.json({ ok: true, data: jsonP });
			// console.log(data.data[0]);
		})
		.catch((err) => {
			res.json({ ok: false });
			console.log(err);
		});
	// console.log(JSON.stringify(data));
	// console.log(data);
	// console.log(data);
	// res.send(data);
};
