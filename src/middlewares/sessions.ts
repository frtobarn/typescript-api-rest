import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtFromUser = req.headers.authorization || "";
    const jwt = jwtFromUser.split(" ").pop();
    const userAllowed = verifyToken(`${jwt}`) as { email: string };
    if (!userAllowed) {
      res.status(401);
      res.send({ message: "Token de sesión no válido" });
    } else {
      req.user = userAllowed;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("INVALID_SESSION");
  }
};

export { checkJwt };
