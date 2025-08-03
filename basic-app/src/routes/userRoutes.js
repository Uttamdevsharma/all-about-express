const express = require("express")

const router = express.Router()


//route parameters
router.get ("/:id" , (req,res) => {
    const userId = req.params.id;
    res.send(`UserId : ${userId}`)
})

