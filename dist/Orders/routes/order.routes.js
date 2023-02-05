"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../Controller/order.controller");
const orderRoute = express_1.default.Router();
orderRoute.get("/get", order_controller_1.fetchAllOrders);
orderRoute.post("/sendName", order_controller_1.getOneOrderByName);
orderRoute.post("/createOrder", order_controller_1.createNewOrder);
exports.default = orderRoute;
//# sourceMappingURL=order.routes.js.map