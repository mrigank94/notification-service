const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  secure: true,
});
