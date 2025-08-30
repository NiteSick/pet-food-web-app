const express = require("express");
const logout = require("../../handlers/logoutHandler");
const router = express.Router();

router.get("/logout", logout);

module.exports = router;
