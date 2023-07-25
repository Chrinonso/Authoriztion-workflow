const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodeMailerConfig');

const sendEmail = async ({to,subject,html}) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig);

    return transporter.sendMail({
        from: '"Starboy" <starboy@gmail.com>', // sender address
        to,
        subject,
        html,
      });
}

module.exports = sendEmail;
