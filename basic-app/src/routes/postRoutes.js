const express = require("express")

const router = express.Router()

//put request
router.put("/" , (req,res) => {
    console.log("Editing post by put request")
    res.send("This is your post");

})

//patch request
router.patch("/edit-post/:id" , (req,res) => {
    console.log("Editing post by patch request")
    const userId = req.params.id;
    res.send(`Id : ${userId}`)

})

module.exports = router;