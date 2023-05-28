const {Schema, model} = require("mongoose")

const categoryModel = new Schema({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = model("categories", categoryModel)
