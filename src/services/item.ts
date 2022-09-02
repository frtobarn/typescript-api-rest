import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertAnItem = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getAllItems = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};

const getAnItem = async (id: String) => {
  const responseItem = await ItemModel.findOne({ __id: id });
  return responseItem;
};

const updateAnItem = async (id: String, data: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ __id: id }, data, {
    new:true//True devuelve el objeto actualizado, si no el viejo
  });
  return responseItem;
};

const deleteAnItem = async (id: String) => {
  const responseItem = await ItemModel.findOneAndDelete({ __id: id });
  return responseItem;
};

export { insertAnItem, getAllItems, getAnItem , updateAnItem, deleteAnItem};
