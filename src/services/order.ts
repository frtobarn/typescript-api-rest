import { Order } from "../interfaces/order.interface";
import OrderModel from "../models/order";

const getAllOrders = async () => {
  //const responsedOrder = await OrderModel.find({})
  const responsedOrder = [{objectNum:1},{objectNum:2}]
  return responsedOrder
};


export { getAllOrders};
