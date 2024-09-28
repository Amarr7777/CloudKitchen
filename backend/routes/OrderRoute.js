import express from 'express'
import authMiddleWare from '../middleware/auth.js'
import { getAllOrders, getUserOrder, placeOrder, updateOrderStatus } from '../controllers/OrderController.js';

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleWare,placeOrder)
orderRouter.post("/getUserOrders",authMiddleWare,getUserOrder)
orderRouter.post("/getAllOrders",getAllOrders)
orderRouter.post("/orderStatus",updateOrderStatus)

export default orderRouter