import express from 'express'
import { addToCart, getCart, removerFromCart } from '../controllers/CartController.js'
import authMiddleWare from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post("/add", authMiddleWare, addToCart)
cartRouter.post("/remove", authMiddleWare, removerFromCart)
cartRouter.post("/get", authMiddleWare, getCart)

export default cartRouter