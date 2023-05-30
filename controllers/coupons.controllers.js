const Coupon = require("../models/coupon.model")
const {v4: uuid} = require("uuid")
const {generateRandomNumber} = require("../utils/generateRandomNumber");
const getAllCoupons = async (req, res) => {
    try {
        const allCoupons = await Coupon.find()
        res.status(200).json(allCoupons)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const getSingleCoupon = async (req, res) => {
    const {couponCode} = req.params
    try {
        const singleCoupon = await Coupon.find({"coupon": couponCode})
        res.status(200).json(singleCoupon)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const addNewCoupon = async (req, res) => {
    const newItem = {
        coupon: uuid(),
        discountPercent: generateRandomNumber(10, 50)
    }
    try {
        const newCoupon = await Coupon.create(newItem)
        res.status(200).json(newCoupon)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const deleteCoupon = async (req, res) => {
    const {id} = req.params
    try {
        await Coupon.findByIdAndDelete(id)
        res.status(200).json({message: "Delete Successfully"})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

module.exports = {getAllCoupons, getSingleCoupon, addNewCoupon, deleteCoupon}
