import { registerService, loginService } from "../service/auth.service.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandle from "../utils/asyncHandle.js";

export const registerController = asyncHandle(async (req, res) => {
  const { newUser, token } = await registerService(req);

  res.cookie("token", token);

  return res
    .status(201)
    .json(new ApiResponse("User Register Successfully", newUser));
});

export const loginController = asyncHandle(async (req, res) => {
  const { token, isExistedUser } = await loginService(req);
  res.cookie("token", token);

  return res
    .status(200)
    .json(new ApiResponse("User Login Successfully", isExistedUser));
});
