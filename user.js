import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("test", "test", "123456", {
	host: "127.0.0.1",
	dialect: "mysql",
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database: ", error);
	});

const Users = sequelize.define("Users", {
	name: {
		type: DataTypes.STRING,
	},

	password: {
		type: DataTypes.STRING,
	},
});

sequelize
	.sync()
	.then(() => {
		console.log("Book table created successfully!");
	})
	.catch((error) => {
		console.error("Unable to create table : ", error);
	});
