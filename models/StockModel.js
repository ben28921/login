import { Sequelize } from "sequelize";
import db from "../config/Database.js";
//stock data model
const { DataTypes } = Sequelize;

const Stock = db.define("Stock", {
	code: {
		type: DataTypes.STRING,
	},

	name: {
		type: DataTypes.STRING,
	},
	nominal: {
		type: DataTypes.STRING,
	},
	Turnover: {
		type: DataTypes.STRING,
	},
});
await Stock.sync();
export default Stock;
