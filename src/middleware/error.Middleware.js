const errorMiddleware = (err, req, res, next) => {
  const message = err.message || "internal server error";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: message,
    success: false,
  });
};

export default errorMiddleware;
