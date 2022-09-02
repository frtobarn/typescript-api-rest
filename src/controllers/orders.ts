import { Request, response, Response } from "express";
import { getAllOrders } from "../services/order";
import { handelHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getOrder = async (/*{ body }:*/ req: RequestExt, res: Response) => {
  try {
    const responsedOrders = await getAllOrders();
    res.send({ responsedOrders, user: req?.user });
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ORDERS");
  }
};

export { getOrder };
