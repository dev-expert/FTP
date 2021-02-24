const nano = require("nano")

exports.create = function (req, res) {
    nano.bind.create(req.body.dbname, function () {
        if (err) {
            res.send("Error creating a Database");
            return;
        }
        res.send("Database created sucessfully");
    })
}