const express = require('express')
const app = express()
const port = 3000
const path = require('path')


//set EJS as the template engine
app.set('view engine','ejs');

//set view directory(folder containg)
app.set('views' , path.join(process.cwd(), 'views') )

app.get('/', (req, res) => {
  res.render("index" , {title: "Home Page" , message: "Welcome to EJS"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
