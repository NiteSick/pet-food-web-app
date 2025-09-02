const express = require("express");
const { body, validationResult } = require("express-validator");
const registerUser = require("../../handlers/registerHandler");
const logger = require("../../../logger");
const router = express.Router();

router.post(
  "/v1/register",
  body("email")
    .exists()
    .withMessage("Email is required")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .trim()
    .notEmpty()
    .withMessage("Password is required"),
  (req, res, next) => {
    console.log("req", req.body);
    const errors = validationResult(req).formatWith(({ msg }) => msg);

    if (errors.isEmpty()) {
      next();
    } else {
      res.status(400).json({ errors: errors.array() });
    }
  },
  registerUser
);

module.exports = router;
