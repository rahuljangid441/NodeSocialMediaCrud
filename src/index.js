import express from 'express'
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
import connectDB from './config/dbConfig.js';
const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
app.get('/' , (req , res)=>{

    return res.json({
        message:"Get Request is called hello"
    });
});

app.use('/api' , apiRouter);

app.get('/ping' , (req , res)=>{
    return res.json({
        message:'Pong'
    })
});


app.get('*' , (req ,res)=>{
    return res.status(404).json({
        message:"Not Found",
       
    })
})


app.listen(PORT , ()=>{
    console.log(`server is running fine on port ${PORT}`);
    connectDB();
});


