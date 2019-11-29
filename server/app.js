require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const cron = require("node-cron");

const seed = require("./bin/seed");

// Database connection
require("./config/db.config");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Allow everyone to make requests to the API

// Cron-job
cron.schedule(
  "0 2 * * *",
  () => {
    console.log("Runing a job at 02:00 AM UTC Europe/Madrid timezone");
    return seed.seedCron();
  },
  {
    scheduled: true,
    timezone: "Europe/Madrid"
  }
);

// Routes
const index = require("./routes/index.routes");
app.use("/", index);

module.exports = app;
