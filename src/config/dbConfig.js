import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB successfully");
    }
    catch(error){
        console.log(MONGO_URL)
        console.log("Error in connecting to DB",error);
    }
}