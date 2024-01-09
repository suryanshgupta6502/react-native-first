const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,"title is must"],
    },
    discription:{
        type:String,
        require:[true,"add discription is must"]
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        require:[true,"posted by must"]
        
    }
},{timestamps:true})

const postModel=mongoose.model("post",postSchema);

module.exports=postModel;