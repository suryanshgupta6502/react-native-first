const mongoose = require("mongoose")
require('dotenv').config();

// const url = process.env.MONGO_URI


const connectdb = mongoose.connect(process.env.MONGODB_URI)
    .then((data) => {
        console.log("connected");
        // console.log(data)
    }).catch((err) => console.log(err));

module.exports= connectdb;