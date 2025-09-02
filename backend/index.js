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
const productsRoute = require("./app/route/products/v1.0/createProducts.route");
const getProductsRoute = require("./app/route/products/v1.0/products.route");

app.use(express.json());
app.use(cookieParser());

app.use("/api/", registerRoute);
app.use("/api/", authRoute);
app.use("/api/", refreshRoute);
app.use("/api/", productsRoute);
app.use("/api/", getProductsRoute);

app.use(verifyJwt);

app.use("/api/", logoutRoute);

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
