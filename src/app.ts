import express from "express";
import connectToMongo from "./database/database";
import orderRoute from "./Orders/routes/order.routes";
import bodyParser from "body-parser";
import config from "./config/db.config";

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

app.use("/order", orderRoute);

app.post("/", () => {
  console.log("Hello World");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
