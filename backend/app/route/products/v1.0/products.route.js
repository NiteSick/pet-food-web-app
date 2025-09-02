const express = require("express");
const getProducts = require("../../../handlers/getProductsHandler");
const router = express.Router();

router.get("/v1/products", getProducts);

module.exports = router;
