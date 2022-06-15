const express = require('express');
// const { diskStorage } = require('multer');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpeg")
        }

    })
}).single("user_file");

app.post('/upload', upload, (req, res) => {
    res.send(200, "file upload");
})

app.listen(5000);