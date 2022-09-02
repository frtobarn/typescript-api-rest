import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({
  email,
  password,
  name,
  description,
}: User) => {
  const checkExist = await UserModel.findOne({ email });

  if (checkExist) return "Already exist";

  const hashedPassword = await encrypt(password);

  const registeredNewUser = UserModel.create({
    email,
    password: hashedPassword,
    name,
    description,
  });

  return registeredNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIfExist = await UserModel.findOne({ email });

  if (!checkIfExist) return "User doesn't exist!";

  const hashedPassword = checkIfExist.password;
  const isCorrect = await verify(password, hashedPassword);
  if (!isCorrect) return "Wrong password!";

  const token = generateToken(checkIfExist.email)//_id

  const data = {
    token,
    user:checkIfExist
  }

  return data;
};

export { registerNewUser, loginUser };
