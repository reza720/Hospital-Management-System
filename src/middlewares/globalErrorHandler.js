const globalErrorHandler = (err, req, res, next) => {
    console.error(err); 

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    const errors = err.errors
        ? err.errors.map(e => ({
            field: e.param || null,
            message: e.msg || e.message || "Error",
        }))
        : [];
    res.status(statusCode).json({
        success: false,
        message,
        errors: errors.length > 0 ? errors : undefined,
    });
};
module.exports = globalErrorHandler;
