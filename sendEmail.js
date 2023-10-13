const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'senders email',
        pass: 'senders password'
    }
});

const mailOptions = {
    from: 'senders email',
    to: 'receivers email',
    subject: ' Test Email',
    text: 'this is content body',
    html: '<p> This is a pargraph </p>'
}

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        return console.error('Error:', error);
    }
    console.log('Email sent', info.response);
});