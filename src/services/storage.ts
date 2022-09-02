import { Storage } from "../interfaces/storage";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responsedItem = await StorageModel.create({ fileName, idUser, path });
  return responsedItem;
};

export { registerUpload };
