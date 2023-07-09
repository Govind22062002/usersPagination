const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/usersPagination").then(
    () => {
        console.log("mongodb connection successful");
    }).catch(()=> {
        console.log("not connect mongodb");
    })