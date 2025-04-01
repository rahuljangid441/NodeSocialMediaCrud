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

export const createTweet = (req , res)=>{
    return res.json({
        message:'Welcome to the Tweet API create',
        body:req.body
    })
}