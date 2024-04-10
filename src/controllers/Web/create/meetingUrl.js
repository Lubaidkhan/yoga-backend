const { createRouter } = require("../../../routes/createRouter");
const jwt = require('jsonwebtoken');
const axios = require("axios")
const { UserAuthMiddleware } = require('../../../middleware/AuthMiddleware')

const CreateBlog = async (req, res) => {

    const apiKey = 'dm85ooCsSFGAjm5ovqUkA';
    const apiSecret = 'U0eRnR1HJoRGYRhr5nhO6MrbRVdZOyF9';

    async function generateJWT() {
        const payload = {
          iss: apiKey,
          exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
        };
        const token = jwt.sign(payload, apiSecret);
        return token;
      }

    const jwtToken = await generateJWT();
    try {
        
        const response = await axios.post('https://api.zoom.us/v2/users/me/meetings', {
            topic: 'My Zoom Meeting',
        }, {
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        const { join_url, start_url } = response.data;
        res.json({ join_url, start_url });
    } catch (error) {
        console.error('Error creating Zoom meeting:', error);
        res.status(500).json({ error: 'Error creating Zoom meeting' });
    }
}

createRouter.post("/meeting-url", UserAuthMiddleware(), CreateBlog);