const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//use the custom middleware globally
app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Welcome to our server')
})

//middleware structure
const myMiddleware = (req,res,next) =>{
    // res.send("Request method is :",req.method())
    console.log("Middleware is executed!")
    next()

}

app.get("/products" ,myMiddleware, (req,res) => {
    // res.send(req.method)
    res.send("Product page...")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
