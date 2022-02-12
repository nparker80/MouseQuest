require('dotenv').config();

const nodemailer = require("nodemailer");

const user = process.env.user;
const pass = process.env.pass;

const transport = nodemailer.createTransport({
service: "Gmail",
auth: {
    user: user,
    pass: pass,
},
});

module.exports.sendConfirmationEmail = (username, email, confirmationCode) => {
    console.log("Check");
    transport.sendMail({
    from: user,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${username}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>
        </div>`,
    }).catch(err => console.log(err));
};
