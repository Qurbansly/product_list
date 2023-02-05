import { Request, Response } from "express";
import Orders from "../models/order.model";

export const createNewOrder = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const orders = new Orders({
      name: req.body.name,
      type: req.body.type,
      date: req.body.date,
    });

    await orders.save();

    res.json(orders);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchAllOrders = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const orders = await Orders.find();

    res.json(orders);
  } catch (error) {
    throw error;
  }
};

export const getOneOrderByName = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const name = req.body.name;

    const selectedOrder = await Orders.findOne({ name });

    res.json(selectedOrder);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteOrderByName = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const name = req.body.name;
    const deletedOrder = await Orders.deleteOne({ name });

    res.json(deletedOrder);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTypeByName = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const name = req.body.name;
    const updatedType = req.body.type;
    const updateStatement = { $set: { type: updatedType } };

    const updatedOrder = await Orders.updateOne({ name }, updateStatement);

    res.json(updatedOrder);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
