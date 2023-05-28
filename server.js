require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = process.env.PORT
const categories = require("./routes/categories.routes")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/categories", categories)

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Started at port ${PORT}`)
    })
})
