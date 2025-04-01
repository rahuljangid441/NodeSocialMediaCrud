export const validate = (schema) =>{
    return async(req , res ,next) =>{
        try{
            schema.parse(req.body);
            next();
        }

        catch(error){
            return res.status(400).json({
                error:error.errors,
                success:false,
                message:"Validation error"
            });
        }
    }
}