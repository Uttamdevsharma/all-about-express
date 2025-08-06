const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const port = process.env.PORT || 3000;


// multer file storage
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    // unique filename
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }); // ✅ এটা আগেই define করা দরকার

// root route
app.get('/', (req, res) => {
  res.send('Hello World!');
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

// listen route
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
