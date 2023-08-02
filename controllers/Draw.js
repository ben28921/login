import axios from "axios";

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
