const postModel = require("../models/postsModel");

const createpost= async(req,res)=>{
    try {

        const {title,discription}=req.body;

        if(!title||!discription){
            return res.status(500).send({
                success:false,
                message:"tile and discription both require"
            })
        }

        const post=await postModel({
            title,
            discription,
            postedBy:req.auth.token
        }).save();
        
        res.status(201).send({
            success:true,
            message:"post added sucessflly",
            post
        })
        // console.log(req);
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"error in new posts route",
            error
        })
    }
}

module.exports={createpost}