import axios from "axios";
import { json } from "sequelize";
import Draw from "../models/DrawModel.js";

export const getLuckyDraw = async (req, res) => {
	let a = [];
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

			jsonData.map((i) => {
				a = i.no.split("+");
				i.Number = a;
			});

			res.json({ ok: true, data: data.data });
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

			for (let i in jsonData) {
				if (i < 10) {
					// jsonP += jsonData[0];
					jsonP.push(jsonData[i]);
					// jsonP.push(jsonData[i]);
					// console.log(i, jsonData[i]);
				}
				// } else if (i > 10 && i < 20) {
				// 	console.log(jsonData[i]);
				// } else {
				// 	console.log(jsonData[i]);
				// }
			}
			console.log(jsonP);
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
