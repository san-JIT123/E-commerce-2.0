import jwt from "jsonwebtoken";
const userAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res.status(404).json({
        message: "token not found",
      });

    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = user;
    next();
  } catch (error) {
    console.log("user auth middleware error", error);
  }
};

export default userAuthMiddleware;
