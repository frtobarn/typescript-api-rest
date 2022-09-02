import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import database from "./config/mongo";
import dbConnect from "./config/mongo";
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

database().then(() => console.log("Database is connected!"));

app.listen(PORT, () => {
  console.log(`Server on port : ${PORT}`);
});
