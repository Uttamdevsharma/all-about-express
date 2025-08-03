const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to our server')
})

//middleware structure
const myMiddleware = (req,res,next) =>{
    console.log("Middleware is executed!")
    next()

}

app.get("/products" ,myMiddleware, (req,res) => {
    res.send("Product page...")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
