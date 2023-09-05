const mongoose = require("mongoose");

var schema = mongoose.Schema({
    title: String,
    description: String,
    email:String,
})

module.exports = mongoose.model("Post",schema)