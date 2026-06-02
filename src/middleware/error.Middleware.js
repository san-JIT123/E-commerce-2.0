const errorMiddleware = (err, req, res, next) => {
  let message = err.message || "internal server error";
  let statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: message,
    success: false,
  });
};

export default errorMiddleware;
