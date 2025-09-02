const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    banner: { type: String, required: true },
    display: { type: String, required: true },
    info: {
      type: [String],
      validate: {
        validator: (val) => val.length === 3, // exactly 3 images
        message: "You must provide exactly 3 info images",
      },
      required: true,
    },
  },
  { _id: false }
);

const productScheme = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    images: imageSchema,
    //   variants: [
    //     {
    //       size: { type: String, required: true },
    //       price: { type: Number, required: true },
    //     },
    //   ],
    //   rating: { type: Number, required: true, maxValue: 5, minValue: 0 },
    //   reviews: { type: Number, required: true },
    //   category: { type: String, required: true },
    //   brand: { type: String, required: true },
    //   inStock: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productScheme);

module.exports = Product;
