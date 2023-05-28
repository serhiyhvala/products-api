const router = require("express").Router()
const {
    addNewProducts,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory
} = require("../controllers/products.controllers")

router.get("/", getAllProducts)

router.get("/:id", getSingleProduct)

router.get("/", getProductsByCategory)

router.post("/", addNewProducts)

router.patch("/:id", updateProduct)

router.delete("/:id", deleteProduct)

module.exports = router
