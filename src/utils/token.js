import jwt from "jsonwebtoken";

export const generateToken = (usersId, email) => {
  return jwt.sign({ usersId,email }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};
