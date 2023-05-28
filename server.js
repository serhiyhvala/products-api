require("dotenv").config()
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT
const categories = require("./routes/categories.routes")

const app = express()
app.use(cors())

app.use("/categories", categories)

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
})
