import { Sequelize } from "sequelize";
import db from "../config/Database.js";
//User data model
const { DataTypes } = Sequelize;

const Users = db.define("Users", {
	name: {
		type: DataTypes.STRING,
	},

	password: {
		type: DataTypes.STRING,
	},
});
await Users.sync();
export default Users;
