const express = require("express");
const router = express.Router();
const makeupController = require("../controllers/makeupcontroller");

router.get("/product", makeupController.index);
router.get("/product/:brand", makeupController.brand);
router.get("/product/:productType", makeupController.productType);
module.exports = router;
