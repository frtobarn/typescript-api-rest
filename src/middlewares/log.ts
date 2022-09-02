import { Request, Response, NextFunction } from "express";

const logMiddleware = (req:Request, res:Response, next: NextFunction) => {
    const headers = req.headers;
    console.log("Middleware activado: ")
    console.log("client: ", headers["user-agent"])
    next()
};

export { logMiddleware };
