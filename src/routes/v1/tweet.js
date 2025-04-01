import express from 'express';

const router = express.Router();

router.get('/' , (req , res)=>{
    return res.json({
        message:"Welcome to the Tweet API"
    })
})

router.get('/:id' , (req , res)=>{
    return res.json({
        message:'Welcome to the Tweet API id',
        id:req.params.id
    })
})

export default router;