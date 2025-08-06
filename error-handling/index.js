const express = require('express')
const app = express()
const fs = require('fs')
const errorHandler = require('./src/middleware/errorHandler')
const port = process.env.PORT || 3000
const CustomError = require('./src/middleware/customError')

app.get('/' ,(req,res,next) => {
    const error= new Error("Home route error")
    next(error);
})


//not found rout
app.get('/notfound' , (req,res,next) => {
    next(new CustomError("Resource not found" , 404))
})

//unauthorized route
app.get("/unauthorized" , (req,res,next) => {
    next(new CustomError("Unauthorized access" , 401))
})


app.get('/about', (req,res,next) => {
    fs.readFile('/abc', (err,data) => {
        if(err){
            next(err);
        } else{
            res.send(data.toString())
        }        
        
    })

})

app.get('/products', (req,res,next) => {
    try{
        res.send("Product page")
    } catch(error){
        next(error)
    }
})

//use the middleware
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
