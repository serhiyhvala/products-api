require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {PORT} = require("./constants")
const categories = require("./routes/categories.routes")
const products = require("./routes/products.routes")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

app.use("/categories", categories)
app.use("/products", products)

app.get('/', (req, res) => {
    res.send('/index.html')
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Started at port ${PORT}`)
    })
})
