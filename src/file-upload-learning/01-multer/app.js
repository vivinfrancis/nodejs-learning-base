const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;

const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/uploads', upload.single('file'), (req, res) => {
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});