const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://Anik:123@cluster0.hbbhk.mongodb.net/Demo?retryWrites=true&w=majority";
const DATABASE_NAME = "Demo";

var app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection1, collection2;

//CONNECTION START FOR BOTH SIGNIN SIGN UP AND RESUME

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection1 = database.collection("demoResume");
    console.log("Connected to `" + DATABASE_NAME + "`!!!");

    collection2 = database.collection("Login");
    console.log("Connected to `" + DATABASE_NAME + "`!!");
});

// DATA EXPORT FOR SIGN IN SIGN UP
app.post("/regis", (request, response) => {
    collection2.insert(request.body, (error, result) => {

        console.log("Data Sent");
        response.json(true);
    });
});

app.post("/signin", (request, response) => {
    var email = request.body.email;
    //console.log(email);
    collection2.findOne({ usermail: email }).then(result => {
        console.log(result);
        response.json(result);
    }).catch(err => {
        console.log(err);
    })
})


// DATA EXPORT FOR RESUME
app.post("/register", (request, response) => {
    collection1.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(true);
    });
});


// DATA IMPORT FOR RESUME
app.get("/getresume", (request, response) => {
    collection1.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
app.listen(1000);