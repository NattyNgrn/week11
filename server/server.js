import express  from "express";
import cors from "cors";
import path from "path";
import DB from "db.js";
import bodyParser from "body-parser";

const app = express();
const port = 1010;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

DB.connect();

