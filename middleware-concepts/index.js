const express = require('express')
const activityLogger = require('./src/middleware/logger')
const myMiddleware = require('./src/middleware/myMiddleware')
const app = express()
const port = process.env.PORT || 3000
//third pary middlwware import
const morgan = require('morgan');
const cors = require('cors');



//third party midlwware
app.use(morgan('combined'))
app.use(cors({
  origin: "http://localhost:5173/"
}))




//use the custom middleware globally
app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Welcome to our server')
})

app.post('/add-post' , (req,res) => {
  console.log(req.body)
  res.send("Blog created succesfully");
})



app.get("/products" ,myMiddleware, (req,res) => {
    // res.send(req.method)
    res.send("Product page.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
