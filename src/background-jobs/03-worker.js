const Queue = require('bull');

const emailQueue = new Queue('email-queue');

emailQueue.process(async (job) => {
    const { email, subject, message } = job.data;
    console.log(`Processing email job: Sending email to ${email} with subject "${subject}" and message "${message}"`);
});