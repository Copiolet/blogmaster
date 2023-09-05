const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    authcode: String
})

const UserModel = mongoose.model("accounts", Userschema)
module.exports = UserModel