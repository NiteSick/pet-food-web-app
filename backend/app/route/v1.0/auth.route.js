const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const login = require("../../handlers/authHandler");

router.post(
  "/auth",
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
  login
);

module.exports = router;
