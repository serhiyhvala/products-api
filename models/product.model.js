const {Schema, model} = require("mongoose")

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    mass: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    }
})

module.exports = model("products", productSchema)
module.exports = productSchema
