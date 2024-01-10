const express=require("express");
const { createpost, getposts } = require("../controllers/postsController");
const { requiresing } = require("../controllers/userController");

const route=express.Router();



route.post("/new-post",requiresing,createpost); 

route.get("/all-posts",getposts)

module.exports=route;