var HTTP = {
    badRequest: function (app) {
        app.use(
            function (err, req, res, next) {
                err.status === 400 ? res.send('404') : next(err);
            });
    }
}

module.exports = HTTP;