export const errorHandler = (err, req, res, next) => {
    if (err.message && err.message.startsWith('ValidationError')) {
        res.status(400).json({
            error: err.message
        });
        return;
    }

    if (err.name && err.name == 'UnauthorizedError') {
        res.status(401).json({
            error: err.message
        });
        return;
    }

    console.log(err.stack);

    if (res.headersSent) {
        return next(err);
    }

    res.status(500).json({
        message: 'Something went wrong',
    });
}