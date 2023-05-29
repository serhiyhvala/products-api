const {Schema, model} = require("mongoose")
const productSchema = require("./product.model")

const orderModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    orders: {
        type: [productSchema],
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

module.exports = model("orders", orderModel)
