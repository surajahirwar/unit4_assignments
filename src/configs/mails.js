const nodemailer=require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "3e4d89fc5c88b4", 
      pass: "4975ef0771b96a",
    },
  });
  

  module.exports = transporter 