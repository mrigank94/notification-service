const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  actionId: {
    type: String,
  },
  recipientEmails: {
    type: [String],
    required: true,
  },
  sentStatus: {
    type: String,
    default: "UNSENT",
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification;
