import { Request, response, Response } from "express";
import { insertAnItem, getAllItems, getAnItem, updateAnItem, deleteAnItem } from "../services/item";
import { handelHttp } from "../utils/error.handle";

const getItem = async (/*{ body }:*/ req: Request, res: Response) => {
  try {
    const responsedItem = await getAnItem(req.params.id);
    res.send(responsedItem)
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getAllItems();
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEMS");
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const responsedItem = await updateAnItem(req.params.id, req.body)
    res.send(responsedItem)
  } catch (error) {
    handelHttp(res, "ERROR_UPDATING_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responsedItem = await insertAnItem(body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_POSTING_ITEM", error);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const responsedItem = await deleteAnItem(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_DELETING_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
