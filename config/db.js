import mongoose from "mongoose";

export const  connectDB = async () =>{
const db_uri= process.env.DB_URI
    await mongoose.connect(db_uri).then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.