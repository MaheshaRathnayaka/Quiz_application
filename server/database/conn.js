import mongoose from "mongoose";


export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI) //() => adding cloud mongo db database
    console.log("Database Connected")
}