const Queue = require('bull');

// Create a new queue
const emailQueue = new Queue('email-queue');

emailQueue.add({
    email: 'vivinfranse@gmail.com',
    subject: 'Hello from Bull Queue',
    message: 'This is a test email sent from the Bull queue.'
});

console.log('Email job added to the queue');