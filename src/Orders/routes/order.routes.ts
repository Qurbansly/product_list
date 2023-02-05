import express from "express";
import {
  createNewOrder,
  fetchAllOrders,
  getOneOrderByName,
} from "../Controller/order.controller";

const orderRoute = express.Router();

orderRoute.get("/get", fetchAllOrders);

orderRoute.post("/sendName", getOneOrderByName);

orderRoute.post("/createOrder", createNewOrder);

export default orderRoute;
