import { Schema, Types, model, Model } from "mongoose";
import { Order } from "../interfaces/order.interface";

const OrderSchema = new Schema<Order>(
  {
    state: {
      type: String,
      enum: ["initByUser", "radicated", "inProgress", "successed", "failed"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = model("orders", OrderSchema);

export default OrderModel;
