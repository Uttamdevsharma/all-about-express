const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

//middleware
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Server is running...')
})

//set headers
app.get("/headers" , (req,res) => {
    res.set('Custom-Header', "This is a custom header")
    res.send("Headers set correctly")
})


//set cookie
app.get("/set-cookie" ,(req,res) => {
  const token = "kdjanoioajnoiihkhkjhkhkhkjdakjknjjdn"
  res.cookie('token' ,  token , {
    httpOnly:true,
    expires:new Date(Date.now() + 90000),
    secure : true

  });
 res.send("Cookie set succesfully");
})


//clear cookie
app.get('/clear-cookie' , (req,res) => {
  res.clearCookie('token');
  res.send("Cokkies remove successfully");
})


//get cookie
app.get("/dashboard" ,(req,res) => {
  const token = req.cookies.token;
  if(!token) {
    return res.send("Your are not authorized")
  }
  res.send("Welcome to Dashboard")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
