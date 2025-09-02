const express = require("express");
const logout = require("../../handlers/logoutHandler");
const router = express.Router();

router.get("/v1/logout", logout);

module.exports = router;
