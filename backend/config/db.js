import mongoose from "mongoose";

export const connetDB = async () => {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.ojqg1.mongodb.net/Cloud-Kitchen').then(()=>{console.log("DB connected")})
}