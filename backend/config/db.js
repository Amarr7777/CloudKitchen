import mongoose from "mongoose";

export const connetDB = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("DB connected")})
}