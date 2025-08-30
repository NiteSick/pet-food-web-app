const express = require("express");
const handleRefresh = require("../../handlers/refreshHandler");
const router = express.Router();

router.get("/refresh", handleRefresh);

module.exports = router;
