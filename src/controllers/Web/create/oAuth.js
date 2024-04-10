const { createRouter } = require("../../../routes/createRouter");
const jwt = require('jsonwebtoken');
const axios = require("axios")
const { UserAuthMiddleware } = require('../../../middleware/AuthMiddleware')

const CreateBlog = async (req, res) => {

    const apiKey = 'V0Xdh4IYTAGxzLm1cweBBA';
    const apiSecret = 'ZxhD0FObKPY3VDtEdMO2E39f6WeeYy6f';

    // async function generateJWT() {
    //     const payload = {
    //       iss: apiKey,
    //       exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
    //     };
    //     const token = jwt.sign(payload, apiSecret);
    //     return token;
    //   }

    // const jwtToken = await generateJWT();
    try {
        
        const response = await axios.post(`https://zoom.us/oauth/authorize?response_type=code&client_id=${apiKey}&redirect_uri=https://3eab-103-212-145-23.ngrok-free.app/`);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error('Error creating Zoom meeting:', error);
        res.status(500).json({ error: 'Error creating Zoom meeting' });
    }
}

createRouter.post("/oauth", UserAuthMiddleware(), CreateBlog);