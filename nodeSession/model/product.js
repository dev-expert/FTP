const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const productSchema = Schema({
    firstname: String,
    lastname: String,
    email: String,
    number: String,
    pass: String,
})
const productmodel = mongoose.model("data", productSchema);

module.exports =productmodel;