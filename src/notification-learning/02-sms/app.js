const twilio = require('twilio');
require('dotenv').config();

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

async function sendSMS() {

    const message =
        await client.messages.create({

            body: 'Hello from Vivin system',

            from: process.env.TWILIO_PHONE_NUMBER,

            to: '+917540055856'
        });

    console.log(message.sid);
}

sendSMS();