const Product = require("../models/product.model")
const {BASE_URL} = require("../constants")

const getAllProducts = async (req, res) => {
    const {category} = req.query
    const filterParams = category ? {"category": category} : {}
    try {
        const allProducts = await Product.find(filterParams)
        res.status(200).json(allProducts)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const getSingleProduct = async (req, res) => {
    const {id} = req.params
    try {
        const singleProduct = await Product.findById(id)
        res.status(200).json(singleProduct)
    } catch (e) {
        res.status(404).json({error: e.message})
    }
}

const addNewProducts = async (req, res) => {
    const {image} = req.body
    const newImage = BASE_URL + image
    try {
        const newProduct = await Product.create({...req.body, image: newImage})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const updateProduct = async (req, res) => {
    const {id} = req.params
    try {
        await Product.findByIdAndUpdate(id, {
            ...req.body
        })
        res.status(200).json({message: "Update Successfully"})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({message: "Delete Successfully"})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

module.exports = {getAllProducts, getSingleProduct, addNewProducts, updateProduct, deleteProduct}
