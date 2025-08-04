
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')


app.use(express.static('public'));



app.get('/' ,(req,res) => {
    res.send("Server is running..")
})

app.get('/inspect',(req,res) => {
    console.log(req.method)
    console.log(req.headers)
    res.send("Inspect Request Now")
})

app.get('/json' ,(req,res) => {
    res.status(200).json({
        message : "SuccessFully"
    })
})

app.get('/redirect' ,(req,res) => {
    res.redirect('/json')
    res.set("headers")
    res.cookie("token" , value)
    res

})



//json data response
app.get('/api/user' , (req,res) => {
    const user = {
        id : 1,
        name : "Uttam dev sharma"
    }

    res.status(200).json({
        message : "successfully ",
        user
    })
})


//html response
app.get('/html' ,(req,res) => {
    res.send( '<h1>This is the html file</h1>')
})



//file response
app.get("/file" ,(req,res) => {

    const filePath = path.join(process.cwd(), "public" , "example.html")
    res.sendFile(filePath);

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})