const express = require('express')
const app = express()
const path =require('path')
const port = process.env.PORT || 3000



//middleware
app.use(express.static(path.join(process.cwd(), "public")))
app.get('/', (req, res) => {
  const pathUrl = path.join(process.cwd(), "public" , "index.html")
  res.sendFile(pathUrl)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
