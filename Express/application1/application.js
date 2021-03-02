const express = require("express")
const App = express();



App.get("/people", function (req, res) {
    res.json({ people: [{ name: "Praveen" }] });
    res.end();
});
App.listen(3000);
