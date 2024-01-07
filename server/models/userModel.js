const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    name: {
        type: String,
        require: [true, "please fill name"]
    },
    email: {
        type: String,
        unique: true,
        require: [true, "fill please email "]
    },
    pass: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "user"
    }
}, { timestamps: true })

const model = mongoose.model("user", schema);
module.exports = model;