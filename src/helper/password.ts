import * as bcrypt from "bcryptjs";

export const generateHash = (str: string) => {
  return bcrypt.hashSync(str, 10);
};

export const compareHash = (str: string, hash: string) => {
  return bcrypt.compareSync(str, hash);
};