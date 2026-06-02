import { registerService } from "../service/auth.service.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandle from "../utils/asyncHandle.js";

export const registerController = asyncHandle(async (req, res) => {
  const { newUser, token } = await registerService(req);

  res.cookie("token", token);
  
  return res
    .status(201)
    .json(new ApiResponse("User Register Successfully", newUser));
});
