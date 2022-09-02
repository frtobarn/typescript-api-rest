import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const hashedPassword = await hash(password, 8);
  return hashedPassword;
};

const verify = async (password: string, hashedPassword: string) => {
  const isCorrect = await compare(password, hashedPassword);
  return isCorrect;
};

export { encrypt, verify };
