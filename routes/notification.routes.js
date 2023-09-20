const {
  createNotification,
  getNotificationById,
} = require("../controllers/notification.controller");

module.exports = function (app) {
  app.post("/notify-service/api/v1/notifications", createNotification);
  app.get("/notify-service/api/v1/notifications/:id", getNotificationById);
};
