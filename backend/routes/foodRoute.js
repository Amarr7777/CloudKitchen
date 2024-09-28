import express from 'express'
import multer from 'multer'
import { addItem, deleteFood, editFood, listFood } from '../controllers/FoodControllers.js';


const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

// add food
foodRouter.post("/add", upload.single("image"), addItem)
foodRouter.get("/listfoods", listFood)
foodRouter.put("/editfood", editFood)
foodRouter.delete("/deletefood", deleteFood)

export default foodRouter;