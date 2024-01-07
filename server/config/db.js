const mongoose = require("mongoose")

const url = "mongodb+srv://Surya:Surya@cluster0.yenhx0h.mongodb.net/reactnative"

const connectdb = mongoose.connect(url)
    .then((data) => {
        console.log("connected");
        // console.log(data)
    }).catch((err) => console.log(err));

module.exports= connectdb;