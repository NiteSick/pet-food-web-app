const express = require("express");
const app = express();
require("dotenv").config();
const logger = require("./logger");
const mongoose = require("mongoose");
const registerRoute = require("./app/route/v1.0/register.route");
const authRoute = require("./app/route/v1.0/auth.route");
app.use(express.json());
app.use("/api/v1", registerRoute);
app.use("/api/v1", authRoute);

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
