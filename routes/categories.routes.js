const router = require("express").Router()
const {
    createNewCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} = require("../controllers/categories.controllers")

router.get("/", getAllCategories)

router.get("/:id", getCategoryById)

router.post("/", createNewCategory)

router.patch("/:id", updateCategory)

router.delete("/:id", deleteCategory)

module.exports = router
