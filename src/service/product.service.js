import ProductModel from "../model/product.model.js";
import ApiError from "../utils/apiError.js";
import sendFiles from "../config/imageKit.js";
export const createProductService = async (req) => {
  const { name, description, price, category } = req.body;
  const images = req.files;

  if (!name || !price) throw new ApiError("name and price are required");

  if (!images) throw new ApiError("images are required");

  const uploadFiles = await Promise.all(
    images.map(async (elem) => {
      return await sendFiles(elem.buffer, elem.originalname);
    }),
  );

  let newProduct = await ProductModel.create({
    productName: name,
    description,
    price,
    category,
    images: uploadFiles.map((elem) => elem.url),
    user: req.user.usersId,
  });

  return newProduct;
};
