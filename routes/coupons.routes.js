const {getAllCoupons, getSingleCoupon, addNewCoupon, deleteCoupon} = require("../controllers/coupons.controllers");
const router = require("express").Router()

router.get("/", getAllCoupons)

router.get("/:couponCode", getSingleCoupon)

router.post("/", addNewCoupon)

router.delete("/:id", deleteCoupon)

module.exports = router
