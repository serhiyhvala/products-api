const Order = require("../models/order.model")
const getAllOrders = async(req, res) => {
    try {
        const allOrders = await Order.find()
        res.status(200).json(allOrders)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const getOrdersByEmail = async(req, res) => {
    const {email} = req.params
    try {
        const singleOrder = await Order.find({"email": email})
        res.status(200).json(singleOrder)
    } catch (e) {
        res.status(404).json({error: e.message})
    }
}

const createNewOrder = async(req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(200).json(newOrder)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const deleteOrder = async (req,res) => {
    const {id} = req.params
    try {
        await Order.findByIdAndDelete(id)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

module.exports = {getAllOrders, getOrdersByEmail, createNewOrder, deleteOrder}
