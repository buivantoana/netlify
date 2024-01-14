const { Router } = require("express");
const routerProduct = require("./product");

const router = Router();

// Thêm các route vào đây
router.use("/product", routerProduct);
module.exports = router;
