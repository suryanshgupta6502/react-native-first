const express=require("express");
const { createpost } = require("../controllers/postsController");
const { requiresing } = require("../controllers/userController");

const route=express.Router();



route.post("/new-post",requiresing,createpost); 

module.exports=route;