require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const errorHandler = require("./middleware/errorHandler");
const messagesRoutes = require("./routes/messagesRoute");
const authRoutes = require("./routes/authRoutes");
const db = require('./models');

app.set("PORT", process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", messagesRoutes);

app.get("/api/messages", async function(req, res, next) {
  try {
    let messages = await db.Message.find()
      .sort({ createdAt: "desc" })
      .populate("user", {
        username: true,
        profileImageUrl: true
      });
    return res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
});

app.use(errorHandler);

app.listen(app.get("PORT"), () =>
  console.log(`Server listening on port ${app.get("PORT")}`)
);
