const express =require("express");
const basic = require("../controllers/basiccontroller");
const { registerController, loginController, userUpdate } = require("../controllers/userController");


const router=express.Router();

router.post("/register",registerController );
router.post("/login", loginController )
router.get("/",basic)
router.put("/user-update", userUpdate)

module.exports=router;