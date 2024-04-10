const { fs } = require("fs");
const { app } = require("../app");
const axios = require("axios")
const { wrapRequestHandler } = require("../helpers/response");

// app.get("/*", wrapRequestHandler(async (req, res) => {
//     const data = await new Promise((resolve, reject) => fs.readFile("frontend-assets.json", (error, data) => error ? resolve(error) : reject(data)));
//     const assets = JSON.parse(data);
//     res.render("index", {assets})
// }));

app.get('/oauthZoom', async (req, res) => {
    const apiKey = 'V0Xdh4IYTAGxzLm1cweBBA';
    const apiSecret = 'ZxhD0FObKPY3VDtEdMO2E39f6WeeYy6f';
    const response = await axios.post(`https://zoom.us/oauth/authorize?response_type=code&client_id=${apiKey}&redirect_uri=https://3eab-103-212-145-23.ngrok-free.app`);
    // console.log(response.data);
    res.render('zoom_oauth', { data: response.data })
})