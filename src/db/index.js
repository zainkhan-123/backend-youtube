import mongoose from "mongoose";
import { DB_Name } from "../constant.js";


const connectDB =  async ()=>{

    try {
        
    const connectionInstance = await mongoose.connect(`${process.env.uri}/${DB_Name}`)

    console.log(`db connected !! DB host : , ${connectionInstance.connection.host} ` );
    
    } catch (error) {

        console.log(" mongo db connection Error :", error);
        process.exit(1)
        
    }
}

export default connectDB;