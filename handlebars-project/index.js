const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//configuration
app.engine('hbs', exphbs.engine({extname: 'hbs' , defaultLayout: 'main'}))
app.set('view engine', 'hbs');
app.set('views' , './views')



app.get('/', (req, res) => {
    const userData = {
        name : "Uttam",
        email : "uttam@gmail.com",
        age:23,
        isAdmin : true,
        hobbies : ["coding","sleep","reading"]
    }
  res.render('profile',userData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
