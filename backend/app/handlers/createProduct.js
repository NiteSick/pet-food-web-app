const Product = require("../model/Product");

const createProduct = async (req, res) => {
  const { name, price, description, images } = req.body;

  try {
    await Product.create({
      name,
      price,
      description,
      images: {
        banner: images.banner,
        display: images.display,
        info: images.info,
      },
    });
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createProduct;
