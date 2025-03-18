import express from 'express'

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
app.get('/' , (req , res)=>{

    return res.json({
        message:"Get Request is called hello"
    });
})


app.post('/hello' , (req , res)=>{
    console.log(req.query);
    console.log("req body is" , req.body);
    return res.json({
        message:"World post"
    })
});


app.get('/tweets/:tweet_id/comments/:comment_id' , (req , res)=>{
    console.log("req.params are",req.params);
    console.log("req.body is" , req.body);
    return res.json({
        message:"Tweets details",
    })
})


app.listen('3002' , ()=>{
    console.log("server is running on port on post 3002");
});