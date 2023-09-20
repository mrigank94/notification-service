const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "ghanshyamjaitpur7281@gmail.com",
    pass: "azxr rvxn dply gony",
  },
  secure: true,
});
