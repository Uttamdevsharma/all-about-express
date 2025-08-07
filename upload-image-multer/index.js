const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const fs = require('fs')
const port = process.env.PORT || 3000;

//middleware
app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/upload' , express.static("uploads"))


// multer file storage
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    // unique filename
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage , limits: {
  fileSize: 2 * 1024 * 1024
} }); 

// root route
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html")
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
  });

  
// // middleware
// app.use(express.static(path.join(process.cwd(), 'public')));


// upload route
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'File not found' });
  }

  res.status(200).json({
    message: 'File uploaded successfully',
    file: req.file.filename
  });
});

app.delete('/delete/:file' , (req,res) => {
  const filePath = path.join(process.cwd(),"uploads",req.params.file)
  fs.unlink(filePath , (err) =>{
    if(err){
      res.send("NOt file fOUND")
    }

    res.send("fILE DELTED SUCCESSFully")
  })



})

// listen route
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
