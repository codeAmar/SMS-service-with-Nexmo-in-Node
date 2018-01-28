require('dotenv').config()
const Nexmo = require('nexmo');
const NEXMO_API_KEY = process.env.YOUR_API_KEY;
const NEXMO_API_SECRET = process.env.YOUR_API_SECRET;
const NEXMO_FROM_NUMBER = process.env.NEXMO_FROM_NUMBER;
const express = require('express');
const router = express.Router();
const nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET,
}, {
    debug: true
});

router.post('/send', (req, res) => {
    // Sending SMS via Nexmo
    nexmo.message.sendSms(
        NEXMO_FROM_NUMBER, req.body.telephone, req.body.message, {
            type: 'unicode'
        },
        (err, responseData) => {
            if (responseData) {
                res.send('message successfully sent');

                console.log(responseData)
            }
        }
    );
})

module.exports = router;