import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responsedUser = await registerNewUser(body);
  res.send({ responsedUser });
};

const loginCtrl = async (req: Request, res: Response) => {
  const responsedUser = await loginUser(req.body);
  if (responsedUser === "Wrong password!") {
    res.status(403);
    res.send({ responsedUser });
  } else {
    res.send({ responsedUser });
  }
};

export { loginCtrl, registerCtrl };
