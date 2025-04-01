import { createTweet as createTweetService  } from "../services/tweetService.js"

export const getTweets = (req ,res)=>{
    return res.json({
        message:"Welcome to the Tweet API"
    })
}

export const getTweetsById = (req , res)=>{
    return res.json({
        message:'Welcome to the Tweet API id',
        id:req.params.id
    })
}

export const createTweet = async (req , res)=>{
   try{
    const response = await createTweetService({
        body:req.body.body
    });
    return res.status(201).json({
        message:"Tweet created successfully",
        success:true,
        data:response
    })
  }
  catch(error){
    console.log("Error in creating tweet in controller",error.message);
    if(error.status){
        return res.status(error.status).json({
            message:error.message,
            success:false
        });
    }
    return res.status(500).json({
        message:"Internal server error",
        success:false,
        error:error.message
    })
  }
}