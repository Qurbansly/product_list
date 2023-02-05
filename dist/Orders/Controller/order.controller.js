"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTypeByName = exports.deleteOrderByName = exports.getOneOrderByName = exports.fetchAllOrders = exports.createNewOrder = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
const createNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = new order_model_1.default({
            name: req.body.name,
            type: req.body.type,
            date: req.body.date,
        });
        yield orders.save();
        res.json(orders);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.createNewOrder = createNewOrder;
const fetchAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_model_1.default.find();
        res.json(orders);
    }
    catch (error) {
        throw error;
    }
});
exports.fetchAllOrders = fetchAllOrders;
const getOneOrderByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const selectedOrder = yield order_model_1.default.findOne({ name });
        res.json(selectedOrder);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.getOneOrderByName = getOneOrderByName;
const deleteOrderByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const deletedOrder = yield order_model_1.default.deleteOne({ name });
        res.json(deletedOrder);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.deleteOrderByName = deleteOrderByName;
const updateTypeByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const updatedType = req.body.type;
        const updateStatement = { $set: { type: updatedType } };
        const updatedOrder = yield order_model_1.default.updateOne({ name }, updateStatement);
        res.json(updatedOrder);
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.updateTypeByName = updateTypeByName;
//# sourceMappingURL=order.controller.js.map