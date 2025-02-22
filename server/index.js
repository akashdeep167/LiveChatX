import express from "express";
import connection from "./database/db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);
const PORT = 8000;

connection();

app.listen(PORT, () => {
  console.log(`Server is running succesfully on port ${PORT}`);
});
