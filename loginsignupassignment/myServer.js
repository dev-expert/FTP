const Express = require("express");
const Cors = require("cors");
// const BodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
// const CONNECTION_URL = "mongodb+srv://SageSujata:Sujata1@@testcluster1.nl7lf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const DATABASE_NAME = "SageSujata";


var app = Express();
app.use(Cors());
app.use(Express.json());
//app.use(BodyParser.json());


app.get("/", (req, res) => {
    res.json({
        message: 'Hello World'
    });
});


app.post("/index", (req, res) => {
    console.log("hii");
    var q = req.body;
    console.log("Post is working " + q.username);
})




app.listen("9090", () => {
    console.log("Server Started");
})