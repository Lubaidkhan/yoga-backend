const { createRouter } = require("../../../routes/createRouter");
const jwt = require('jsonwebtoken');
const axios = require("axios")
const { UserAuthMiddleware } = require('../../../middleware/AuthMiddleware')


const CreateBlog = async (req, res) => {

    const apiKey = 'V0Xdh4IYTAGxzLm1cweBBA';
    const apiSecret = 'ZxhD0FObKPY3VDtEdMO2E39f6WeeYy6f';

    // async function generateJWT() {
    //     // const payload = {
    //     //     iss: apiKey,
    //     //     exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
    //     // };
    //     const token = jwt.sign({apiKey:apiKey},apiSecret);
    //     return token;
    // }
    const token = jwt.sign({apiKey:apiKey},apiSecret);
    // const jwtToken = await generateJWT();
    try {

        const response = await axios.post(`https://zoom.us/oauth/token?grant_type=authorization_code&code=yVtcQfbSuLK9aot7uA4T0-l5Zpf9VURSg&redirect_uri=https://d2fa-103-212-145-68.ngrok-free.app/`, {
            headers: {
                "Host": "zoom.us",
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        res.json(response );
    } catch (error) {
        console.error('Error creating Zoom meeting:', error);
        res.status(500).json({ error: 'Error creating Zoom meeting' });
    }
}

createRouter.post("/oauth2", UserAuthMiddleware(), CreateBlog);