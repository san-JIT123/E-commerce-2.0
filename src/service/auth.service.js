import UserModel from "../model/user.model.js";
import ApiError from "../utils/apiError.js";
import { generateToken } from "../utils/token.js";

export const registerService = async (req) => {
  const { name, email, password } = req.body;

  //  Empty Field Check
  if (!name || !email || !password) {
    throw new ApiError("All fields are required", 400);
  }

  //  Name Validation
  if (name.trim().length < 3) {
    throw new ApiError("Name must be at least 3 characters", 400);
  }

  if (name.trim().length > 50) {
    throw new ApiError("Name is too long", 400);
  }

  //  Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new ApiError("Invalid email format", 400);
  }

  //    Password Validation
  if (password.length < 6) {
    throw new ApiError("Password must be at least 6 characters", 400);
  }

  if (password.length > 20) {
    throw new ApiError("Password is too long", 400);
  }

  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  if (!strongPassword.test(password)) {
    throw new ApiError(
      "Password must contain uppercase, lowercase and number",
      400,
    );
  }

  // Existing user check
  const isExisted = await UserModel.findOne({ email });
  if (isExisted) {
    throw new ApiError("User already registered", 409);
  }

  //  If validation passes, create the user

  const newUser = await UserModel.create({
    name,
    email,
    password,
  });

  const token = generateToken(newUser._id, newUser._id);

  return {
    newUser,
    token,
  };
};

export const loginService = async (req) => {
  const { email, password } = req.body;

  //  Empty Field Check
  if (!email || !password) {
    throw new ApiError("All fields are required", 400);
  }
  //  Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new ApiError("Invalid email format", 400);
  }

  //    Password Validation
  if (password.length < 6) {
    throw new ApiError("Password must be at least 6 characters", 400);
  }

  if (password.length > 20) {
    throw new ApiError("Password is too long", 400);
  }

  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  if (!strongPassword.test(password)) {
    throw new ApiError(
      "Password must contain uppercase, lowercase and number",
      400,
    );
  }

  // existing user check
  const isExistedUser = await UserModel.findOne({ email });
  if (!isExistedUser) {
    throw new ApiError("user not found", 404);
  }

  // compare password
  let comparePassword = isExistedUser.comparePassword(password);
  if (!comparePassword) {
    throw new ApiError("Invalid Credential", 409);
  }

  // token generate for login
  const token = generateToken(isExistedUser._id, isExistedUser.email);

  return {
    token,
    isExistedUser,
  };
};
