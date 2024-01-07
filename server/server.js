const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectdb = require("./config/db");
const model = require("./models/userModel");

const app = express();

// Corrected: Call connectdb function
connectdb;
model;
// Corrected: Call model function or use the model instance appropriately
// For example: const userModel = model(); // assuming model returns a Mongoose model
// Use userModel in your routes/controllers as needed

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/', require("./routes/userRoute"));

// Corrected: Add a callback to the listen method to handle errors and log success
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
