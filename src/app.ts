import express from "express";
import connectToMongo from "./database/database";
import orderRoute from "./Orders/routes/order.routes";
import jwtRoute from "./jwt/routes/jwt.routes";
import bodyParser from "body-parser";
import config from "./config/db.config";
import { jwtVerify } from "./jwt/controller/jwt.controller";

const app = express();
const port = config.PORT;
const mongo_url = config.MONGODB_URL;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

connectToMongo(mongo_url);

app.use(jwtVerify);

app.use("/order", orderRoute);
app.use("/jwt", jwtRoute);

app.post("/", () => {
  console.log("Hello World");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
