const router = require("express").Router()

router.get("/", (req, res) => {
    res.json({msg: "GET All Category"})
})

router.get("/:id", (req, res) => {
    res.json({msg: "GET Category By ID"})
})

router.post("/", (req, res) => {
    res.json({msg: "POST A New Category"})
})

router.patch("/:id", (req, res) => {
    res.json({msg: "UPDATE A Category"})
})

router.delete("/:id", (req, res) => {
    res.json({msg: "DELETE A Category"})
})

module.exports = router
