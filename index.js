require("./cron/cron");

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const { DB_URL, DB_NAME } = require("./configs/db.config");
const PORT = require("./configs/server.config");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(`${DB_URL}/${DB_NAME}`)
  .then(() => console.log("Connected to mongodb successfully"))
  .catch((ex) => console.log("Error occurred", ex));

require("./routes/notification.routes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
