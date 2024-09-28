import orderModel from "../models/OrderModel.js";
import userModel from "../models/UserModel.js";


//place order
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} })
        res.json({ success: true, message: "order Placed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

//user order
const getUserOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId })
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}
//get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

//order status
const updateOrderStatus = async (req, res) => {
    try {
        const order = await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })
        res.json({ success: true, message: "order status updated" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}
export { placeOrder, getUserOrder, getAllOrders, updateOrderStatus }