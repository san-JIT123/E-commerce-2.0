import { createProductService } from "../service/product.service.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandle from "../utils/asyncHandle.js";

export const createProductController = asyncHandle(async (req, res) => {
  const createProduct = await createProductService(req);

  return res
    .status(201)
    .json(new ApiResponse("Product Create Successfully", createProduct));
});
