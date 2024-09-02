module.exports = function (req, res, next) {
    console.log(`Запрос на адрес: ${req.originalUrl}`);
    next();
};
