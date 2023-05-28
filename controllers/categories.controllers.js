const Category = require("../models/category.model")

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find()
        res.status(200).json(allCategories)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const getCategoryById = async (req, res) => {
    const {id} = req.params
    try {
        const singleCategory = await Category.findById(id)
        res.status(200).json(singleCategory)
    } catch (e) {
        res.status(404).json({error: e.message})
    }
}

const createNewCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body)
        res.status(200).json(newCategory)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const updateCategory = async (req, res) => {
    const {id} = req.params
    try {
        await Category.findByIdAndUpdate(id, {
            ...req.body
        })
        res.status(200).json({message: "Update Successfully"})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const deleteCategory = async (req, res) => {
    const {id} = req.params
    try {
        await Category.findByIdAndDelete(id)
        res.status(200).json({message: "Delete Successfully"})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

module.exports = {getAllCategories, getCategoryById, createNewCategory, updateCategory, deleteCategory}
