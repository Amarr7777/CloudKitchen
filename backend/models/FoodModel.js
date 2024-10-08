import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Boolean, required: true, default: true },
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;