require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const errorHandler = require("./middleware/errorHandler");
const messagesRoutes = require("./routes/messagesRoute");
const authRoutes = require("./routes/authRoutes");

app.set("PORT", process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);

app.use(errorHandler);

app.listen(app.get("PORT"), () =>
  console.log(`Server listening on port ${app.get("PORT")}`)
);
