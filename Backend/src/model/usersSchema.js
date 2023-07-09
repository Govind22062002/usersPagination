const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    avatar: String,
    domain: String,
    available: Boolean
})

const user = mongoose.model("User", userSchema);

module.exports = user;