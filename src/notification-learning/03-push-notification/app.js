const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(
        require('./serviceAccountKey.json')
    )
});

async function sendPush() {

    const message = {
        notification: {
            title: 'Node.js Learning',
            body: 'Push notification sent successfully'
        },
        token: 'DEVICE_TOKEN'
    };

    const response =
        await admin.messaging().send(message);

    console.log(response);
}

sendPush();