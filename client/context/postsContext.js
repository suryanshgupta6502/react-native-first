import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const PostContext=createContext();

const PostProvider=({children})=>{
    const [posts,setposts]=useState();

    const getallposts=async()=>{
        try {
            const { data } = await axios.get("http://192.168.0.207:3000/all-posts") ;
            setposts(data?.posts)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getallposts();
    },[])

    return(
        <PostContext.Provider value={[posts,setposts]}>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext,PostProvider};