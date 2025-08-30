const express = require("express");
const app = express();
require("dotenv").config();
const logger = require("./logger");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
const registerRoute = require("./app/route/v1.0/register.route");
const authRoute = require("./app/route/v1.0/auth.route");
const verifyJwt = require("./app/middleware/verifyJwt");
const refreshRoute = require("./app/route/v1.0/refresh.route");
const logoutRoute = require("./app/route/v1.0/logout.route");

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", registerRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", refreshRoute);

app.use(verifyJwt);

app.use("/api/v1", logoutRoute);

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
