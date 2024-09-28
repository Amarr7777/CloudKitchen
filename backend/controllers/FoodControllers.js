import foodModel from "../models/FoodModel.js";
import fs from 'fs'

//add food item
const addItem = async (req, res) => {
    let image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save()
        res.json({ success: true, message: "Item added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// list food
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log("error")
        res.json({ success: false, message: "Error" })
    }
}
//edit food
const editFood = async (req, res) => {
    try {
        const food = await foodModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ success: true, data: food })
    } catch (error) {
        console.log("error")
        res.json({ success: false, message: "Error" })
    }
}

//delete food
const deleteFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "food deleted" })
    } catch (error) {
        console.log("Error")
        res.json({ success: false, message: "error" })
    }
}
export { addItem, listFood, deleteFood, editFood }