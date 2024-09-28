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
      const foodId = req.params.id; // Use the ID from the URL
      const updatedFoodData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
      };
      if (req.file) {
        updatedFoodData.image = req.file.filename;
      }
  
      const food = await foodModel.findByIdAndUpdate(foodId, updatedFoodData, { new: true });
      res.json({ success: true, data: food });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, message: "Error" });
    }
  };

//delete food
const deleteFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "food deleted" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}
export { addItem, listFood, deleteFood, editFood }