import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config({ path: "./.env" });

// const db = mysql.createConnection({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
// });
// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "test",
//   password: "123456",
//   database: "test",
// });

// db.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("MySQL connected!");
//   }
// });

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cookieParser());

// app.use(express.json());

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
