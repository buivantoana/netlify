const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      min: 6,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    desc: {
      type: String,
      min: 6,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
