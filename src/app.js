const express = require("express");
const os = require("os");
const app = express();
const path = require('path')
const fileUpload = require("express-fileupload");
const cors = require("cors");

app.use(cors())
app.get("assets/images/*", (req, res) => {
    res.sendfile("assets/images/" + req.params[0]);
});

app.use(fileUpload({
    userTempFiles: true,
    preserveExtension: true,
    tempFileDir: os.tmpdir(),
    parseNested: true
}));

// app.use((req, res, next) => {
//     req.body = {
//         ...req.body,
//         ...req.files
//     };
//     +next();
// })

app.use(express.json());
app.use(express.static("assets"));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

module.exports = {
    app
}
