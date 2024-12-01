const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dhruv.22111324@viit.ac.in",
    subject: "Welocme to the task manager app",
    text: `Welcome to the app, ${name}.Let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dhruv.22111324@viit.ac.in",
    subject: `Goodbye ${name}`,
    text: "What could we have done to make you stay with us longer?",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
