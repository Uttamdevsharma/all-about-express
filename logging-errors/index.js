const express = require('express')
const app = express()
const port = 3000
const errorHandler=require('./middleware/errorHandler')

app.get('/', (req, res,next) => {
    const error = new Error("Error on Homepage")
    next(error)
 
})

//call middleware
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
