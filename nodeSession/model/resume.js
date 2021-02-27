const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const productSchema = Schema({}, {strict:false})
const resumeModel = mongoose.model("resume", productSchema);

module.exports =resumeModel;