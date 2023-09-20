const Notification = require("../models/notification.model");

async function createNotification(req, res) {
  const notification = await Notification.create(req.body);
  res.status(201).send(notification);
}

async function getNotificationById(req, res) {
  try {
    const notification = await Notification.findById(req.params.id);
    res.status(200).send(notification);
  } catch (ex) {
    res.status(404).send({
      message: `Notification with ID - ${req.params.id} does not exist`,
    });
  }
}

module.exports = {
  createNotification,
  getNotificationById,
};
