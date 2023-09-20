const cron = require("node-cron");
const Notification = require("../models/notification.model");
const EmailService = require("../notifier/emailService");

cron.schedule("*/20 * * * * *", async function () {
  // every 30 seconds, check if there is a new UNSENT notification in DB and send it

  const unsentNotifications = await Notification.find({
    sentStatus: "UNSENT",
  });

  console.log(unsentNotifications.length);

  unsentNotifications.forEach((notification) => {
    const mailData = {
      from: "relevel-notification-service@gmail.com",
      to: notification.recipientEmails,
      subject: notification.subject,
      text: notification.content,
    };

    EmailService.sendMail(mailData, async function (err, info) {
      if (err) {
        console.log("Error in sending mail", err);
      } else {
        console.log("Updating sent status for " + notification._id);
        await Notification.findByIdAndUpdate(notification._id, {
          sentStatus: "SENT",
        });
      }
    });
  });
});
