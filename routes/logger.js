var P2C = rootRequire('Print2Console');

module.exports = function (app) {
    
    function logger (req, res, next){
        var d = new Date();
        P2C.info('express',
                 req.method + '\n\t\t ' +
                 ' -> IP: ' + req.ip + '\n\t\t ' +
                 ' -> URL: ' + req.url + '\n\t\t ' +
                 ' -> AT: ' +
                 d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' - ' +
                 d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
                );
        next();
    };
    
    app.use(logger);
}