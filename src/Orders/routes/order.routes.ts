import express from "express";
import {
  createNewOrder,
  deleteOrderByName,
  fetchAllOrders,
  getOneOrderByName,
  updateTypeByName,
} from "../Controller/order.controller";

const orderRoute = express.Router();

orderRoute.get("/get", fetchAllOrders);

orderRoute.post("/sendName", getOneOrderByName);

orderRoute.post("/createOrder", createNewOrder);

orderRoute.delete("/deleteOrder", deleteOrderByName);

orderRoute.put("/updateOrder", updateTypeByName);

export default orderRoute;
