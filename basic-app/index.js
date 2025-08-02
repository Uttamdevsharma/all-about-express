const express = require('express')
const app = express();
const port = process.env.PORT || 3000


//middleware to parse json request bodies
app.use(express.json())

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

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
})