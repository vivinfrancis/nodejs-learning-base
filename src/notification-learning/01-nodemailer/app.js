const nodemailer = require('nodemailer');

async function sendEmail() {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vivinfranse@gmail.com',
            pass: 'vrcg ecwd sohs mfoe'
        }
    });

    const info = await transporter.sendMail({
        from: 'vivinfranse@gmail.com',
        to: 'prakashsiluvai9@gmail.com',
        subject: 'Hii bro',
        text: 'Email sent successfully using Nodemailer'
    });

    console.log('Message ID:', info.messageId);
}

sendEmail();