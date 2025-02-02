import express from 'express';
import fetch from 'node-fetch';
import https from 'https';
const router = express.Router();

const agent = new https.Agent({
    rejectUnauthorized: false
});


router.get('/', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/users`, { agent })
        console.log(response);
        const data = await response.json();
        return res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;