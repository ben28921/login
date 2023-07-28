import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config({ path: "./.env" });

app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
