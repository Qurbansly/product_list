import mongoose, { Schema, Model, Document } from "mongoose";

interface IOrders extends Document {
  name: string;
  type: string;
  date: string;
}

const ordersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Orders = mongoose.model<IOrders>("Orders", ordersSchema);

export default Orders;
