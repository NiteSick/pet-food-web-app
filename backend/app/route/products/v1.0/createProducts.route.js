const express = require("express");
const { body, validationResult } = require("express-validator");
const createProduct = require("../../../handlers/createProduct");
const router = express.Router();

router.post(
  "/v1/products",
  body("name")
    .exists()
    .withMessage("Name is required")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),
  body("price")
    .exists()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .custom((value) => {
      if (value <= 0) {
        throw new Error("Price must be greater than 0");
      }
      return true;
    }),
  body("description")
    .exists()
    .withMessage("Description is required")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),
  body("images.banner")
    .exists()
    .withMessage("Banner is required")
    .trim()
    .notEmpty()
    .withMessage("Banner is required"),
  body("images.display")
    .exists()
    .withMessage("Display is required")
    .trim()
    .notEmpty()
    .withMessage("Display is required"),
  body("images.info")
    .exists()
    .withMessage("Info images are required")
    .isArray()
    .withMessage("Info must be an array")
    .custom((value) => {
      if (!Array.isArray(value) || value.length !== 3) {
        throw new Error("Info must contain exactly 3 images");
      }
      // Validate each element is a non-empty string
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] !== "string" || value[i].trim() === "") {
          throw new Error(`Info image ${i + 1} must be a non-empty string`);
        }
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req).formatWith(({ msg }) => msg);
    if (errors.isEmpty()) {
      next();
    } else {
      res.status(400).json({ errors: errors.array() });
    }
  },
  createProduct
);

module.exports = router;
