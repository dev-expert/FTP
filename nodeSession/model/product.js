const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const productSchema = Schema({
    name: String,
    age: String,
})
const productmodel = mongoose.model("data", productSchema);

module.exports =productmodel;