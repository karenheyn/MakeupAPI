const express = require("express");
const router = express.Router();
const makeupController = require("../controllers/makeupcontroller");

router.get("/product", makeupController.index);
router.get("/product/brand/:brand", makeupController.findbrand);
router.get("/product/type/:type", makeupController.findType);
router.post("/product", makeupController.newProduct);
module.exports = router;
