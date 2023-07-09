const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({
    Team_Name : String,
    team : Array
}, { timestamps: true })

const teams = mongoose.model("teams", teamSchema);

module.exports = teams;