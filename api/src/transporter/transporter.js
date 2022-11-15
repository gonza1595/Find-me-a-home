const nodemailer = require("nodemailer");
const { MAILING_EMAIL, MAILING_PASSWORD } = process.env; 

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: MAILING_EMAIL,
      pass: MAILING_PASSWORD, 
    },
  });
  
module.exports = {
  transporter
}