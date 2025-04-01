export const createManualTweetValidator = (req , res , next) =>{
    if(!req.body.tweet){
        return res.json({
            message:"Tweet is rfdfequired"
        });
    }

    if(req.body.tweet.length > 280){
        return res.json({
            message:"Tweet should be less than 280 characters"
        });
    }

    next();
}