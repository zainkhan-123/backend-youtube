
import  dotenv  from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB()






/*
import express from "express";
const app = express();

( async()=>{
   try {
   await mongoose.connect(`${process.env.uri}/${DB_Name} `)
    app.on("error" , (err)=>{
        console.log("Error :" , err);
        
    })    
     app.listen( process.env.Port , ()=>{
console.log(`server is runing on port :  , ${process.env.Port}`);

     })
   } catch (error) {
    console.log("Error :" , error);
    throw err 
    
   }

})()
 
*/

