const {Schema, model} = require("mongoose")

const couponsModel = new Schema({
    coupon: {
        type: String,
        uppercase: true,
        required: true
    },
    discountPercent: {
        type: Number,
        required: true
    }
})

module.exports = model("coupons", couponsModel)
