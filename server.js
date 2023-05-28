require("dotenv").config()
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.json({msg: "Restaurant API"})
})

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
})
