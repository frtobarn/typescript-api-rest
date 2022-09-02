import { Response } from "express";
import dbConnect from "../config/mongo";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage";
import { handelHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    //otras validaciones antes de enviar al servicio
    //console.log(file?.size)
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.email}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (error) {
    handelHttp(res, "ERROR_REGISTERING_DATA");
  }
};

export { getFile };
