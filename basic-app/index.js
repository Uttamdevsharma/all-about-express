const express = require('express')
const app = express();
const port = process.env.PORT || 3000

//middleware to parse json request bodies
app.use(express.json())




//Mount routes
const postRoutes = require("./src/routes/postRoutes.js");
const userRoutes = require("./src/routes/userRoutes.js")
app.use("/users" , userRoutes);
app.use("/post", postRoutes);







//get request
app.get('/', (req,res) => {
    res.send("Welcome to the Server");
})

//routing with get request
app.get("/about" , (req,res) => {
    res.send("This is about page");
})

//post request - req.body()e oi datagula thake jegula server e pathai
app.post("/contact" , (req,res) => {
    console.log(req.body)
    res.send("Message Recieved");
})




//delete request
app.delete("/comments/:id" , (req,res) => {
    const commentId = req.params.id
    console.log("Deleting comments using delete request method");
    res.send(`Deleted comment no. ${commentId} successfully`)
})


//handling Query String
app.get("/search" , (req,res) => {
    // console.log(req.query);
    const {category,title} = req.query;
    console.log(category,title);
    res.send(`This ${title}  available in this ${category} category.`)
})



app.listen(port, () => {
    console.log(`Server is running port ${port}`);
})