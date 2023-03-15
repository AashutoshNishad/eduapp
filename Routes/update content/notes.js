const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up multer middleware for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
});

const upload = multer({ storage: storage });

// Handle file upload route
app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No PDF file uploaded');
  }

  // Do something with the uploaded file
  console.log(req.file);

  res.status(200).send('PDF file uploaded successfully');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
