const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
    await sharp(req.file.path).resize(300, 300).toFile(path.join(__dirname, `processed/${req.file.filename}`));
    fs.unlinkSync(req.file.path);

    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});