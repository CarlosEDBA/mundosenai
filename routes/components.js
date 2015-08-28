module.exports = function (express, app) {

    //var router = express.Router();

    app.get('/components/:folder/:file', function (req, res) {
        res.sendFile(req.params.file, { root: publicDir + 'bower_components/' + req.params.folder });
    });

    app.get('/components/:file', function (req, res) {
        res.sendFile(req.params.file, { root: publicDir + 'components/' });
    });

}