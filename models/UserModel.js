import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define("User", {
  name: {
    type: DataTypes.STRING,
  },

  password: {
    type: DataTypes.STRING,
  },
});

// (async () => {
//   await db.sync();
// })();

export default Users;
