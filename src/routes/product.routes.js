import express from "express";
import upload from "../config/multer.js";
import { createProductController } from "../controller/product.controller.js";
import userAuthMiddleware from "../middleware/userAuth.middleware.js";

const router = express.Router();

router.post(
  "/createProduct",
  userAuthMiddleware,
  upload.array("images", 5),
  createProductController,
);

// router.get("/getAllProduct", getAllProductController);
// router.get("/getProductById", getProductByIdController);
// router.put("/updateProduct", updateProductController);
// router.delete("/deleteProduct", deleteProductController);

export default router;
