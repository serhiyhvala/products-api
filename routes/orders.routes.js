const {createNewOrder, getAllOrders, getOrdersByEmail, deleteOrder} = require("../controllers/orders.controllers");
const router = require("express").Router()

router.get("/", getAllOrders)

router.get("/:email", getOrdersByEmail)

router.post("/", createNewOrder)

router.delete("/:id", deleteOrder)


module.exports = router
