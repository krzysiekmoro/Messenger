function errorHandler(err, req, res, next){
    return res.status(err.status || 404).json({
        error: {
            message: err.message || 'Sorry, something went wrong. Try again.'
        }
    })
}

module.exports = errorHandler;