import { Sequelize } from "sequelize";
import db from "../config/Database.js";
//stock data model
const { DataTypes } = Sequelize;

const Draw = db.define("Draw", {
	uid: {
		type: DataTypes.STRING,
	},

	date: {
		type: DataTypes.STRING,
	},
	no: {
		type: DataTypes.STRING,
	},
	sno: {
		type: DataTypes.STRING,
	},
});
await Draw.sync();
export default Draw;
