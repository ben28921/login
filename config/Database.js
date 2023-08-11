import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;
// const db = new Sequelize("test", "test", "123456", {
const db = new Sequelize("test", "test2", "Aa!123456", {
	// host: "127.0.0.1",
	host: "192.168.123.62",
	dialect: "mysql",
});

export default db;

// import mysql from "mysql";

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "test",
//   password: "123456",
//   database: "test",
// });

// export default db;
