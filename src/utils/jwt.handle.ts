import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.0101010101";

const generateToken = (email: string) => {
  const jwt = sign({ email }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt:string) => {
  const tokenOwner = verify(jwt, JWT_SECRET)
  return tokenOwner
};

export { generateToken, verifyToken };
